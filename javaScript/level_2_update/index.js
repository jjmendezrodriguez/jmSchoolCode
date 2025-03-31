import { getCardValue, getRandomCard } from "./cardsDeck.js";

let cards = []; // creamos un array

let sum = 0;
let sumBet = 0;
let hasBlackJack = false;
let isAlive = false; // Para que el juego inicie debe ser true. ver funcion startGame().
let message = ""; // El propocito de esta variable es para cambiar el mensaje en el HTML.
let player = {
  name: "",
  chips: 0,
};

// Aqui seleccionas el id del HTML
let messageEl = document.getElementById("message-el");
let playerSum = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let betEl = document.getElementById("bet-el");

// Main menu ========================================

const mainMenu = document.getElementById("main-menu");
let nameInput = document.getElementById("player-input");
let isStart = true;
const gameContainer = document.getElementById("game-container");
const startGame = document.getElementById("start-game");
const alertOne = document.getElementById("alert-one");
const playerName = document.getElementById("player-name");
let playerChips = document.getElementById("player-chips");

// Variables del dealer ========================================

let dealerCards = [];
let dealerSumCards = 0;
let isDealer = false;

const dealerEl = document.getElementById("dealer-cards"); // Donde se muestran las cartas
const dealerSumEl = document.getElementById("dealer-sum"); // Donde se muestra la suma del dealer

// Start game ========================================

startGame.addEventListener("click", function (e) {
  e.preventDefault();
  if (isStart) {
    nameInput.classList.add("active");
    this.textContent = "Submit";
    isStart = false;
    return;
  }

  const playerNameValue = nameInput.value.trim();
  if (playerNameValue === "") {
    alertOne.classList.add("active");
    nameInput.focus();
    return;
  }

  player.name = playerNameValue;

  playerName.textContent = `Name: ${player.name}`;
  playerChips.textContent = `Chips: $0`;

  mainMenu.classList.add("deactive");
  gameContainer.classList.add("active");

  const playerTitle = document.querySelector(".title");
  playerTitle.textContent = `${player.name}`;
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

function showAlert(msg = "Alert", onOff = true) {
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

  resetGameState(true, true);
  hasBlackJack = false;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];

  ShowCards();

  let firstCardValue = await getCardValue(firstCard);
  let secondCardValue = await getCardValue(secondCard);

  sum = firstCardValue + secondCardValue;
  playerSum.textContent = `Sum: ${sum}`;

  renderGame(true);

  alertMsg.classList.remove("active");
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
  playerChips.textContent = `Chips: $${player.chips}`;
  alertMsg.classList.remove("active");
  resetGameState(true);
}

// stay ==========================================

document.getElementById("stay").addEventListener("click", function () {
  if (inGame) {
    stayHand();
    messageEl.textContent = message;
  } else {
    showAlert("You need to start the game!");
  }
});

// Bet ========================================

const betBtn = document.getElementById("bet-btn");

betBtn.addEventListener("click", bet);

function bet() {
  if (!isAlive && hasBlackJack === false) {
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
  playerSum.textContent = `Sum: ${sum}`;

  if (isNewRound) {
    sumBet += 20;
    player.chips -= 10;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
  }

  if (sum < 21) {
    message = "Do you want to draw a new card?";
    resetGameState(true, true);
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    youWin();
  } else {
    message = "You're out of the game!";
    resetGameState();
    showAlert("you lose, start new game!", false);
  }
  //Con esto cambias el texto del HTML, la linea donde coinside el id usado.
  messageEl.textContent = message;
}

function youWin() {
  player.chips += sumBet * 2;
  sumBet = 0;
  playerChips.textContent = `Chips: $${player.chips}`;
  betEl.textContent = `Bet: $${sumBet}`;
  resetGameState();
}

// function

// New card ========================================

const newCardBtn = document
  .getElementById("new-card")
  .addEventListener("click", newCard);

async function newCard() {
  if (!isAlive || !inGame) {
    showAlert("You need to click play!");
    return;
  }

  if (isAlive && hasBlackJack === false) {
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
  alertMsg.classList.remove("active");
  showAlert("Click Play!", false);
  console.log(`reinisie el juego`);
}

function reset() {
  resetGameState(true);
  isDealer = false;
  hasBlackJack = false;
  cards = [];
  sumBet = 0;
  sum = 0;
  dealerSumCards = 0;
  cardsEl.textContent = `Cards: `;
  playerSum.textContent = `Sum: `;
  dealerEl.textContent = `Cards: `;
  dealerSumEl.textContent = `Sum: `;
  betEl.textContent = `Bet: $0`;
}

function resetGameState(valueOne = false, valueTwo = false) {
  if (typeof valueOne !== "boolean" || typeof valueTwo !== "boolean") {
    throw new TypeError(
      "Both arguments must be boolean values (true or false)."
    );
  }
  isAlive = valueOne;
  inGame = valueTwo;
}

// Dealer ===============================================

//  Función que inicia la mano del dealer ===========================================

async function stayHand() {
  isDealer = true;

  // isDealer = true;
  inGame = true;
  hasBlackJack = false;

  // Dealer recibe dos cartas
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  dealerCards = [firstCard, secondCard];

  // Calcular suma correctamente
  let firstCardValue = await getCardValue(firstCard, 0);
  let secondCardValue = await getCardValue(secondCard, firstCardValue);
  dealerSumCards = firstCardValue + secondCardValue;

  // Mostrar las cartas del dealer
  showDealerCards();

  // Renderizar juego
  renderDGame();
}

function setIsDealer() {
  return isDealer;
}

// Muestra las cartas del dealer en pantalla ========================================

function showDealerCards() {
  dealerEl.textContent = `Cards: ${dealerCards
    .map((card) => `${card.value}${card.suit}`)
    .join(" ")}`;
}

// Actualiza el estado del dealer y decide si debe tomar otra carta.

function checkGame() {
  if (dealerSumCards > 21) {
    showAlert("Dealer Bust! Lose.", false);
    youWin();
    message = "Dealer Bust! Lose. You win!";
    resetGameState();
    return;
  }

  // 2️⃣ Si el dealer tiene 21 exactos, gana automáticamente.
  if (dealerSumCards === 21) {
    message = "The dealer has Blackjack! He won!";
    showAlert("The dealer has Blackjack!", false);
    resetGameState();
    return;
  }

  if (dealerSumCards > sum) {
    message = "Dealer has better hand, He won!";
    showAlert("Dealer has better hand", false);
    resetGameState();
  }
  messageEl.textContent = message;
}

function renderDGame() {
  dealerSumEl.textContent = `Sum: ${dealerSumCards}`;

  // 1️⃣ Si el dealer tiene más de 21, pierde automáticamente.
  if (dealerSumCards > 21) {
    checkGame();
    return;
  }

  // 3️⃣ Si el dealer tiene un "Soft 17" (A + 6), puede pedir otra carta.
  let hasAce = dealerCards.some((card) => card.value === "A");
  let isSoft17 = hasAce && dealerSumCards === 17;

  while (dealerSumCards < 17 || isSoft17) {
    let newCard = getRandomCard();
    dealerCards.push(newCard);
    dealerSumCards += getCardValue(newCard, dealerSumCards);
    showDealerCards();
    dealerSumEl.textContent = `Sum: ${dealerSumCards}`;

    // Recalcular si sigue siendo Soft 17 después de la nueva carta
    hasAce = dealerCards.some((card) => card.value === "A");
    isSoft17 = hasAce && dealerSumCards === 17;
  }
  if (dealerSumCards > 21) {
    checkGame();
  } else {
    message = "You Win!";
    showAlert("Player Win!", false);
    youWin();
  }
  messageEl.textContent = message;
}

export { setIsDealer, stayHand, dealerSumCards };
