let cards = []; // creamos un array
let sum = 0;
let hasBlasckJack = false;
let isAlive = false; // Para que el juego inicie debe ser true. ver funcion startGame().
let message = ""; // El propocito de esta variable es para cambiar el mensaje en el HTML.
let player = {
  name: "JM",
  chips: 100,
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
  isAlive = true;
  let firstCard = getRamdomCard();
  let secondCard = getRamdomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlasckJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlasckJack === false) {
    let card = getRamdomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
