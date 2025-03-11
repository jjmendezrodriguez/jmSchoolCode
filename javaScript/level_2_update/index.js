import {
  getCardValue,
  getRandomCard,
} from "/javaScript/level_2_update/cardsDeck.js";

import { stayHand } from "/javaScript/level_2_update/dealer.js";

let cards = []; // creamos un array

let sum = 0;
let sumBet = 0;
let hasBlasckJack = false;
let isAlive = false; // Para que el juego inicie debe ser true. ver funcion startGame().
let message = ""; // El propocito de esta variable es para cambiar el mensaje en el HTML.
let player = {
  name: "",
  chips: 0,
};

// Aqui seleccionas el id del HTML
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let betEl = document.getElementById("bet-el");

// Main menu ========================================

const mainMenu = document.getElementById("main-menu");
let nameInput = document.getElementById("player-input");
let isStart = true;

const startGame = document.getElementById("start-game");
const alertOne = document.getElementById("alert-one");
const playerName = document.getElementById("player-name");
let playerChips = document.getElementById("player-chips");

startGame.addEventListener("click", function (e) {
  e.preventDefault();
  if (isStart) {
    nameInput.classList.add("active");
    this.textContent = "Submit";
    isStart = false;
  } else {
    if (nameInput.value.trim() === "") {
      alertOne.classList.add("active");
      nameInput.focus();
    } else {
      player.name = nameInput.value.trim();
      playerName.textContent = `Name: ${player.name}`;
      playerChips.textContent = `Chips: $${player.chips}`;
      mainMenu.classList.add("deactive");
      // console.log(player);
    }
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim().length > 0) {
    // trim() elimina los espacios en blanco
    alertOne.classList.remove("active"); // Remover rojo si el campo es válido
  }
});

// Alert variable ========================================

const alertMsg = document.getElementById("alert-msg");
let timeout;

function showAlert(msg = "Aletr", onOff = true) {
  alertMsg.classList.add("active");
  alertMsg.textContent = msg;
  if (onOff) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      alertMsg.classList.remove("active");
    }, 3000);
  }
}

// Quit game ==========================================

const quitGame = document.getElementById("quit-btn");

quitGame.addEventListener("click", function () {
  // isAlive = false;
  // Object.assign(player, { name: "", chips: 0 });
  // nameInput.value = "";
  // playerName.textContent = `Name: ${player.name}`;
  // playerChips.textContent = `Chips: $${player.chips}`;
  // mainMenu.classList.remove("deactive");
  // nameInput.classList.remove("active");
  // startGame.textContent = "START GAME";
  // isStart = true;
  // console.log(isAlive + player + "click btn quit");
  location.reload();
  localStorage.clear();
});

// Start play ========================================

let inGame = false;

const startPlayBtn = document
  .getElementById("start-play")
  .addEventListener("click", function () {
    if (player.chips <= 0) {
      showAlert("Please Add Credit To Your Accound!", false);
    } else if (!isAlive) {
      showAlert("click new game!", false);
    } else {
      play();
    }
  });

async function play() {
  if (inGame) {
    showAlert("Game already in progress!");
    return;
  }

  isAlive = true;
  hasBlasckJack = false;
  inGame = true; // 🔥 Ahora el juego está en progreso

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];

  ShowCards();

  let firstCardValue = await getCardValue(firstCard);
  let secondCardValue = await getCardValue(secondCard);

  sum = firstCardValue + secondCardValue;
  sumEL.textContent = `Sum: ${sum}`;

  renderGame(true);

  alertMsg.classList.remove("active");
  // console.log(`${isAlive} click start play btn`);
}

function ShowCards() {
  cardsEl.textContent = `Cards: `;
  for (let card of cards) {
    cardsEl.textContent += `${card.value}${card.suit} `;
  }
}

// chips ========================================

const ChipsBtn = document.getElementById("chips-btn");

ChipsBtn.addEventListener("click", addChips);

function addChips() {
  player.chips += 100;
  // console.log(player); // para pruebas
  playerChips.textContent = `Chips: $${player.chips}`;
  alertMsg.classList.remove("active");
  isAlive = true;
}

// Dealer ==========================================

document.getElementById("dealer").addEventListener("click", function () {
  if (inGame) {
    stayHand();
  } else {
    showAlert("You need to start the game!");
  }
});

// Bet ========================================

const betBtn = document.getElementById("bet-btn");

betBtn.addEventListener("click", bet);

function bet() {
  // console.log(`${isAlive} click bet btn`);
  if (!isAlive && hasBlasckJack === false) {
    showAlert("click new game!", false);
  } else if (player.chips <= 0) {
    showAlert("Please Add Credit To Your Accound!");
  } else if (inGame === false) {
    showAlert("You need to click play!");
  } else {
    sumBet += 10;
    player.chips -= 10;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
  }
}

// Render game ========================================

async function renderGame(isNewRound = false) {
  ShowCards();
  sumEL.textContent = `Sum: ${sum}`;

  if (isNewRound) {
    sumBet += 10;
    player.chips -= 10;
    sumBet += 10;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
  }

  if (sum < 21) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlasckJack = true;
    youWin();
  } else {
    message = "You're out of the game!";
    isAlive = false;
    inGame = false;
    showAlert("you lose, start new game!", false);
  }
  //Con esto cambias el texto del HTML, la linea donde coinside el id usado.
  messageEl.textContent = message;
}

export function youWin() {
  player.chips += sumBet * 2;
  sumBet = 0;
  playerChips.textContent = `Chips: $${player.chips}`;
  betEl.textContent = `Bet: $${sumBet}`;
  isAlive = false;
  inGame = false;
}

// New card ========================================

const newCardBtn = document.getElementById("new-card");

newCardBtn.addEventListener("click", newCard);

async function newCard() {
  if (!isAlive || !inGame) {
    showAlert("You need to click play!");
    return;
  }

  if (isAlive && hasBlasckJack === false) {
    let card = getRandomCard(); // Creamos una nueva carta
    let cardValue = await getCardValue(card); // Obtenemos el valor de la carta
    sum += cardValue; // sum el nuevo valor al anterior valor de sum
    cards.push(card);
    renderGame();
  }
}

// New game ========================================

const newGameBtn = document.getElementById("new-game");

newGameBtn.addEventListener("click", newGame);

function newGame() {
  if (inGame) {
    showAlert("Game already in progress!");
    return;
  }
  reset();
  // console.log(`${isAlive} ${hasBlasckJack} click newgamebtn`);
  alertMsg.classList.remove("active");
  showAlert("Click Play!", false);
}

function reset() {
  isAlive = true;
  hasBlasckJack = false;
  cards = [];
  cardsEl.textContent = `Cards: `;
  sumEL.textContent = `Sum:`;
}
