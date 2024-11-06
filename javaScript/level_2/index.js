let cards = []; // creamos un array
let sum = 0;
let hasBlasckJack = false;
let isAlive = false; // Para que el juego inicie debe ser true. ver funcion startGame().
let message = "";
let player = {
  name: [],
  chips: [],
};

// Aqui seleccionas el id del HTML
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRamdomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; // guardamos el valor de Math.random() en una variable
  if (randomNumber > 10) {
    // si el valor de randomNumber es mayor a 10
    return 10;
  } else if (randomNumber === 1) {
    // si el valor de randomNumber es igual a 1
    return 11;
  }
  return randomNumber; // por ser una variable let y local, podemos usarla en cualquier parte de la funcion.
}

function startGame() {
  isAlive = true; // Para que el juego inicie debe ser true.
  let firsCard = getRamdomCard();
  let secondCard = getRamdomCard();
  cards = [firsCard, secondCard];
  /* ^ cambiamos el valor del array con los valores de firsCard y secondCard,
  de esta forma podemos saber que cartas se han sacado al inicio del juego. */
  sum = firsCard + secondCard;
  renderGame();
  // Con esta funcion iniciamos el juego con dos cartas y el valor ramdom de cada carta.
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
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
  if (isAlive === true && hasBlasckJack === false) {
    // si isAlive es true y hasBlasckJack es false
    let card = getRamdomCard(); // Creamos una nueva carta
    sum += card; // sum el nuevo valor al anterior valor de sum
    cards.push(card);
    renderGame(); /* Para activar la funcion startGame(). 
  No olvidemos que cuando llamamos una funcion se ejecuta todo
  lo que esta dentro de las llaves {}, por eso llamamos StartGame(). */
  }
}
