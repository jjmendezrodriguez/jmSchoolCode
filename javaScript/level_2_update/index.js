let cards = []; // creamos un array
let sum = 0;
let sumBet = 0;
let hasBlasckJack = false;
let isAlive = false; // Para que el juego inicie debe ser true. ver funcion startGame().
let response = ""; // Con variables empty podemos usarlas en cualquier parte del codigo.
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
let playerEl = document.getElementById("player-el");

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
      console.log(player);
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

// Random card deck ========================================

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
});

// Start play ========================================

const startPlayBtn = document.getElementById("start-play");

startPlayBtn.addEventListener("click", function () {
  if (player.chips <= 0) {
    showAlert("Please Add Credit To Your Accound!", false);
  } else if (isAlive === false) {
    showAlert("click new game!", false);
  } else {
    isAlive = true; // Para que el juego inicie debe ser true.
    let firsCard = getRamdomCard();
    let secondCard = getRamdomCard();
    cards = [firsCard, secondCard];
    /* ^ cambiamos el valor del array con los valores de firsCard y secondCard,
  de esta forma podemos saber que cartas se han sacado al inicio del juego. */
    sum = firsCard + secondCard;
    renderGame(true);
    console.log(`${isAlive} click star play btn`);
    // Con esta funcion iniciamos el juego con dos cartas y el valor ramdom de cada carta.
  }
});

// chips ========================================

const ChipsBtn = document.getElementById("chips-btn");

ChipsBtn.addEventListener("click", addChips);

function addChips() {
  player.chips += 10;
  console.log(player); // para pruebas
  playerChips.textContent = `Chips: $${player.chips}`;
  alertMsg.classList.remove("active");
  isAlive = true;
}

function stay() {}

// Bet ========================================

const betBtn = document.getElementById("bet-btn");

betBtn.addEventListener("click", bet);

function bet() {
  console.log(`${isAlive} click bet btn`);
  if (isAlive === false) {
    showAlert("click new game!", false);
  } else if (player.chips <= 0) {
    showAlert("Please Add Credit To Your Accound!");
  } else {
    sumBet += 10;
    player.chips -= 10;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
  }
}

// Render game ========================================

function renderGame(isNewRound = false) {
  cardsEl.textContent = `Cards: `;
  for (let i of cards) {
    cardsEl.textContent += `${i} `;
  }
  sumEL.textContent = `Sum: ${sum}`;

  if (isNewRound) {
    console.log(isNewRound + "new Round");
    sumBet += 10;
    player.chips -= 10;
    sumBet += 10;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
    console.log("voy por if < 20");
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlasckJack = true;
    player.chips += sumBet;
    sumBet = 0;
    playerName.textContent = `Name: ${player.name}`;
    playerChips.textContent = `Chips: $${player.chips}`;
    betEl.textContent = `Bet: $${sumBet}`;
    isAlive = false;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    showAlert("you lose, start new game!", false);
  }
  //Con esto cambias el texto del HTML, la linea donde coinside el id usado.
  messageEl.textContent = message;
}

// New card ========================================

const newCardBtn = document.getElementById("new-card");

newCardBtn.addEventListener("click", newCard);

function newCard() {
  console.log(`${isAlive} ${hasBlasckJack} new card btn`);
  if (isAlive === false) {
    showAlert("You need to start the game!");
  } else if (isAlive && hasBlasckJack === false) {
    // si isAlive es true y hasBlasckJack es false
    let card = getRamdomCard(); // Creamos una nueva carta
    sum += card; // sum el nuevo valor al anterior valor de sum
    cards.push(card);
    console.log(`${isAlive} ${hasBlasckJack} click new card btn else `);
    renderGame(); /* Para activar la funcion startGame(). 
    No olvidemos que cuando llamamos una funcion se ejecuta todo
    lo que esta dentro de las llaves {}, por eso llamamos StartGame(). */
  }
}

// New game ========================================

const newGameBtn = document.getElementById("new-game");

newGameBtn.addEventListener("click", newGame);

function newGame() {
  isAlive = true;
  hasBlasckJack = false;
  console.log(`${isAlive} ${hasBlasckJack} click newgamebtn`);
  alertMsg.classList.remove("active");
}

function reset() {
  newGame();
  player.name = "";
  player.chips = 0;
  playerName.textContent = `Name: ${player.name}`;
  playerChips.textContent = `Chips: $${player.chips}`;
}
