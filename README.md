# Rock-Paper-Scissors Game

Welcome to my Rock-Paper-Scissors game! This project is a simple, interactive game built using HTML, CSS, and JavaScript. You'll play against the computer, which will randomly generate its moves. This README will guide you through the process of how I built the game, the concepts I used, and the rules of the game.

## Table of Contents
- [Game Rules](#game-rules)
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [Future Improvements](#future-improvements)

## Game Rules
The game is simple and follows these basic rules:

1. Both the player and the computer choose one of three moves: rock, paper, or scissors.
2. The winner is determined based on the following rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
3. If both the player and the computer choose the same move, the game is a tie.

## Project Overview
In this project, I applied the knowledge from a JavaScript tutorial I completed. The main concepts I put into practice include:

- Using images to represent the moves (rock, paper, and scissors).
- Handling user interactions through event listeners (onclick and onKeydown).
- Manipulating the DOM using methods like document.querySelector.
- Generating the computer's move using Math.random.
- Implementing delays and repeated actions with setInterval and setTimeout.
- Writing arrow functions for cleaner and more concise code.
- Using forEach to loop through elements.

## Technologies Used
- HTML: For the structure of the game.
- CSS: For styling the game.
- JavaScript: For the game logic and interactivity.

## How It Works
### HTML
The HTML file sets up the basic structure of the game. It includes:

- Images representing rock, paper, and scissors.
- Buttons for the player's choices.
- A section to display the computer's choice.
- A section to display the result of each round.

### CSS
The CSS file styles the game to make it visually appealing. Key elements include:

- Positioning the images and buttons.
- Styling the result display to show the outcome of each round.
- Adding animations to make the game more interactive.

### JavaScript
The JavaScript file contains the logic for the game. Here's a detailed breakdown of the key concepts:

- Event Listeners:
  - onclick: Attached to the player's move buttons to capture their choice.
  - onKeydown: Optional functionality to allow keyboard input for making a move.
- DOM Manipulation:
  - document.querySelector: Used to select HTML elements to manipulate their properties and content.
- Generating Computer's Move:
  - Math.random: Generates a random number between 0 and 1, which is then used to select one of the three moves (rock, paper, or scissors).
- Delays and Timed Actions:
  - setInterval: Could be used for any repeated actions, such as updating a timer or animation.
  - setTimeout: Used to create a delay before displaying the computer's move and the result of the round.
- Arrow Functions:
  - Used for concise function expressions, making the code cleaner and easier to read.
- Looping with forEach:
  - Used to add event listeners to multiple elements efficiently.

## Future Improvements
Here are some ideas for future improvements to the game:

- Add a scoring system to keep track of the player's and computer's scores.
- Implement more advanced animations for a smoother user experience.
- Allow the player to choose the number of rounds to play.
- Enhance the game's visuals with more detailed graphics and sound effects.
- Make the game responsive to work well on different screen sizes and devices.

Thank you for checking out my Rock-Paper-Scissors game! I hope you enjoy playing it as much as I enjoyed building it. If you have any feedback or suggestions, feel free to reach out.

Happy playing!