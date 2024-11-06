# Blackjack Game

This project is a simple implementation of a Blackjack game using JavaScript. Below are the key concepts and elements used in the `index.js` file.

## Concepts and Elements

### Variables

- **cards**: An array to store the cards drawn.
- **sum**: A variable to store the sum of the card values.
- **hasBlasckJack**: A boolean to check if the player has Blackjack.
- **isAlive**: A boolean to check if the player is still in the game.
- **message**: A string to store the game messages.
- **player**: An object to store player information (name and chips).

### DOM Manipulation

- **messageEl**: Selects the HTML element with the id `message-el`.
- **sumEL**: Selects the HTML element with the id `sum-el`.
- **cardsEl**: Selects the HTML element with the id `cards-el`.
- **playerEl**: Selects the HTML element with the id `player-el` and sets its text content to display the player's name and chips.

### Functions

- **getRamdomCard()**:

  - Generates a random number between 1 and 13.
  - If the number is greater than 10, it returns 10.
  - If the number is 1, it returns 11.
  - Otherwise, it returns the random number.

- **startGame()**:
  - Sets `isAlive` to true to indicate the game has started.

### JavaScript Concepts

- **Arrays**: Used to store multiple values in a single variable (`cards`).
- **Objects**: Used to store multiple properties in a single variable (`player`).
- **Booleans**: Used to store true/false values (`hasBlasckJack`, `isAlive`).
- **DOM Manipulation**: Used to interact with HTML elements (`document.getElementById`).
- **Functions**: Used to encapsulate reusable code blocks (`getRamdomCard`, `startGame`).

## How to Play

1. Open the `index.html` file in a web browser.
2. Click the "START GAME" button to begin.
3. Click the "NEW CARD" button to draw a new card.
4. The game will display messages and update the card values and sum accordingly.

## File Structure

- **index.html**: The HTML file that contains the structure of the game.
- **index.css**: The CSS file that styles the game.
- **index.js**: The JavaScript file that contains the game logic.

## Additional Notes

- The game logic is implemented in the `index.js` file.
- The game interacts with the HTML elements using DOM manipulation.
- The game uses basic JavaScript concepts such as variables, arrays, objects, booleans, and functions.

Enjoy playing the Blackjack game!
