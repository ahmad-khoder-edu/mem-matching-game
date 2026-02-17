# Memory Matching Game

## Overview

This project implements a simple memory matching game using vanilla JavaScript, HTML, and CSS. The game allows users to create a customizable grid of cards, each hiding a color. The objective is to match pairs of identical colors by flipping cards.

## Architecture

The application follows a traditional frontend structure:

- **HTML (`index.html`)**: Defines the user interface, including input fields for grid dimensions and the game board container.
- **CSS (`styles.css`)**: Provides styling for layout, colors, and transitions, utilizing CSS Grid for the game board and Flexbox for input alignment.
- **JavaScript (`script.js`)**: Handles game logic, including board generation, card flipping, matching detection, and win conditions.

## Functionality

- **Board Generation**: Users specify rows and columns via inputs. The total number of cells must be even to form pairs. Upon clicking "generate board," a grid is created with shuffled color pairs.
- **Gameplay**: Cards are initially black. Clicking a card flips it to reveal its color. Selecting two cards: if they match, they remain revealed; otherwise, they flip back after a delay.
- **Win Condition**: The game ends with an alert when all pairs are matched.

## Key Concepts for Beginners

- **DOM Manipulation**: Using `document.getElementById`, `createElement`, and `appendChild` to dynamically create and modify HTML elements.
- **Event Listeners**: Attaching click events to cards with `addEventListener` to handle user interactions.
- **CSS Grid**: Employing `grid-template-columns` and `grid-template-rows` for responsive layout.
- **Array Operations**: Shuffling arrays with a custom function and managing state with arrays like `flippedCards`.
- **Asynchronous Behavior**: Using `setTimeout` for delayed actions, such as flipping cards back.

This codebase serves as an excellent introduction to frontend development, demonstrating separation of concerns and interactive web applications without external libraries.