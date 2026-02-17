
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function generateBoard() {
    const row = parseInt(document.getElementById('row').value);
    const col = parseInt(document.getElementById('col').value);
    if (!row || !col || row * col % 2 !== 0) {
        alert('Total cells must be even');
        return;
    }
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    gameBoard.style.gridTemplateColumns = `repeat(${col}, 100px)`;
    gameBoard.style.gridTemplateRows = `repeat(${row}, 100px)`;
    const colorPairs = (row * col) / 2;
    const colorList = ['red', 'blue', 'green', 'yellow', 'purple', 'orange',
        'pink', 'brown', 'gray', 'white', 'cyan', 'magenta', 'lime', 'navy', 'maroon', 
        'olive', 'teal', 'silver', 'gold', 'indigo', 'violet', 'coral', 'turquoise', 
        'salmon', 'khaki', 'beige', 'plum', 'orchid', 'tan', 'ivory', 'mint', 'crimson'];
    let colors = [];
    for (let i = 0; i < colorPairs; i++) {
        colors.push(colorList[i % colorList.length], colorList[i % colorList.length]);
    }
    return {gameBoard, colors, colorPairs, row, col};
} 
function gameLogic() {
    const {gameBoard, colors, row, col, colorPairs} = generateBoard();
    shuffle(colors);
    let flippedCards = [];
    let matchedPairs = 0;
    for (let i = 0; i < row * col; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = colors[i];
        card.addEventListener('click', () => {
            if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
            card.classList.add('flipped');
            card.style.backgroundColor = card.dataset.color;
            card.textContent = card.dataset.color;
            flippedCards.push(card);
            if (flippedCards.length === 2) {
                const [firstFlipped, secondFlipped] = flippedCards;
                if (firstFlipped.dataset.color === secondFlipped.dataset.color) {
                    firstFlipped.classList.add('matched');
                    secondFlipped.classList.add('matched');
                    matchedPairs++;
                    if (matchedPairs === colorPairs) {
                        setTimeout(() => alert('You win!'), 500);
                    }
                } else {
                    setTimeout(() => {
                        firstFlipped.classList.remove('flipped');
                        firstFlipped.style.backgroundColor = '#000';
                        firstFlipped.textContent = '';
                        secondFlipped.classList.remove('flipped');
                        secondFlipped.style.backgroundColor = '#000';
                        secondFlipped.textContent = '';
                    }, 1000);
                }
                flippedCards = [];
            }
        });
        gameBoard.appendChild(card);
    }  
}

document.getElementById('generate-board-btn').addEventListener('click', gameLogic);