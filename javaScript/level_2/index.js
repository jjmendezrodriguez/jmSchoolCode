let firsCard = 2;
let secondCard = 8;
let cards = [firsCard, secondCard]; // creamos un array
let sum = firsCard + secondCard;
let hasBlasckJack = false;
let isAlive = true;
let message = "";
// Aqui seleccionas el id del HTML
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlasckJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  //Con esto cambias el texto del HTML, la linea donde coinside el id usado.
  messageEl.textContent = message;
}

function newCard() {
  let card = 10; // Creamos una nueva carta
  sum += card; // sum el nuevo valor al anterior valor de sum
  cards.push(card);
  renderGame(); /* Para activar la funcion startGame(). 
  No olvidemos que cuando llamamos una funcion se ejecuta todo
  lo que esta dentro de las llaves {}, por eso llamamos StartGame(). */
}
