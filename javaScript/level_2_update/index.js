import {
  getCardValue,
  getRandomCard,
} from "/javaScript/level_2_update/cardsDeck.js";

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
      gameContainer.classList.add("active");
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
  hasBlackJack = false;
  inGame = true; // 🔥 Ahora el juego está en progreso

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

// stay ==========================================

document.getElementById("stay").addEventListener("click", function () {
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
    hasBlackJack = true;
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

function youWin() {
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
  // console.log(`${isAlive} ${hasBlackJack} click newgamebtn`);
  alertMsg.classList.remove("active");
  showAlert("Click Play!", false);
}

function reset() {
  isAlive = true;
  hasBlackJack = false;
  cards = [];
  cardsEl.textContent = `Cards: `;
  playerSum.textContent = `Sum: `;
  dealerEl.textContent = `Cards: `;
  dealerSumEl.textContent = `Sum: `;
  betEl.textContent = `Bet: $0`;
}

// Dealer ===============================================

// Variables del dealer

let dealerCards = [];
let dealerSumCards = 0;

// Elementos del DOM

const dealerEl = document.getElementById("dealer-cards"); // Donde se muestran las cartas
const dealerSumEl = document.getElementById("dealer-sum"); // Donde se muestra la suma del dealer

// Obtiene el valor de la carta, el As se ajusta dinámicamente ========================

// function getDealerCardValue(card, currentSum) {
//   if (card.value === "A") {
//     return currentSum + 11 > 21 ? 1 : 11;
//   }
//   if (["J", "Q", "K"].includes(card.value)) return 10;
//   return parseInt(card.value);
// }

//  Función que inicia la mano del dealer ===========================================

export function stayHand() {
  // isDealer = true;
  inGame = true;
  hasBlackJack = false;

  // Dealer recibe dos cartas
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  dealerCards = [firstCard, secondCard];

  // Calcular suma correctamente
  let firstCardValue = getCardValue(firstCard, 0);
  let secondCardValue = getCardValue(secondCard, firstCardValue);
  dealerSumCards = firstCardValue + secondCardValue;

  // Mostrar las cartas del dealer
  showDealerCards();

  // Renderizar juego
  renderDGame();

  setIsDealer();
}

export function setIsDealer() {
  return {
    isDealer: true,
  };
}
console.log(setIsDealer());

// Muestra las cartas del dealer en pantalla ========================================

function showDealerCards() {
  dealerEl.textContent = `Cards: ${dealerCards
    .map((card) => `${card.value}${card.suit}`)
    .join(" ")}`;
}

// Actualiza el estado del dealer y decide si debe tomar otra carta.

function renderDGame() {
  dealerSumEl.textContent = `Sum: ${dealerSumCards}`;
  const playerSumEl = Number(playerSum.textContent.split(" ")[1]);

  if (dealerSumCards < 21) {
    let newCard = getRandomCard();
    dealerCards.push(newCard);
    dealerSumCards += getCardValue(newCard, dealerSumCards);
    showDealerCards();
    renderDGame(); // Llamada recursiva hasta que el dealer tenga igual o más que el jugador
  }

  if (dealerSumCards > 21) {
    console.log("Dealer Bust! Dealer pierde.");
    youWin();
    betEl.textContent = `Bet: $ `;
  } else if (dealerSumCards === playerSum) {
    showAlert("Empate!", false);
    inGame = false;
    betEl.textContent = `Bet: $0`;
    player.chips += 10;
    playerChips.textContent = `Chips: $${player.chips}`;
  } else if (dealerSumCards > playerSumEl) {
    showAlert("Dealer tiene mejor mano, gano!", false);
    betEl.textContent = `Bet: $0`;
    isAlive = false;
    inGame = false;
    console.log(`${isAlive}`);
  } else if (dealerSumCards === 21) {
    console.log("Dealer tiene Blackjack!");
    hasBlackJack = true;
    showAlert("Dealer tiene Blackjack, gano!", false);
    betEl.textContent = `Bet: $ `;
  }
}
