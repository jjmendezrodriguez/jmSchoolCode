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
  lastTen: false,
};

// Aqui seleccionas el id del HTML
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let betEl = document.getElementById("bet-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + "" + player.chips;

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

const startGame = document.querySelector(".main-menu");
const gameStart = document.querySelector(".game-container");

function game() {
  (startGame.style.display = "none"), (gameStart.style.display = "block");
}

function quit() {
  isAlive = false;
  (startGame.style.display = "flex"), (gameStart.style.display = "none");
}

function startPlay() {
  isAlive = true; // Para que el juego inicie debe ser true.
  if (!player.name || player.name.length === 0) {
    player.name = prompt("What's your name?");
    while (player.name.length === 0) {
      alert("Please enter your name!");
      player.name = prompt("What's your name?");
    }
    console.log("voy por aqui");
    if (player.chips < 10) {
      while (player.chips < 10) {
        alert("You need at least $10 to play!");
        player.chips = prompt("How many chips do you want to add?");
        playerEl.textContent = player.name.toUpperCase() + ": $" + player.chips;
      }
    }
  }
  if (cards > 0) {
    startOver();
  } else {
    let firsCard = getRamdomCard();
    let secondCard = getRamdomCard();
    cards = [firsCard, secondCard];
    /* ^ cambiamos el valor del array con los valores de firsCard y secondCard,
  de esta forma podemos saber que cartas se han sacado al inicio del juego. */
    sum = firsCard + secondCard;
    renderGame();
    console.log("comienza el juego");
    // Con esta funcion iniciamos el juego con dos cartas y el valor ramdom de cada carta.
  }
}

function addChips() {
  console.log("addChips");
  if (player.chips < 10) {
    while (player.chips < 10) {
      alert("You need at least $10 to play!");
      player.chips = prompt("How many chips do you want to add?");
      playerEl.textContent = player.name.toUpperCase() + ": $" + player.chips;
    }
  }
}

function stay() {}

function bet() {
  console.log("click bet");
  if (isAlive === false) {
    alert("You need to start a new game!");
  }
  if (player.chips >= 10) {
    // rev. to move to startGame()
    alert("you bet $10");
    player.chips -= 10;
    playerEl.textContent = player.name.toUpperCase() + ": $" + player.chips;
    startGame();
  }
  if (cards > 1 && player.chips < 10) {
    //fix
    addChips();
  }
}

function newGame() {
  if (isAlive === false) {
    alert("You need to start a new game!");
  } else {
    startOver();
    cards = [];
    sum = 0;
    hasBlasckJack = false;
    isAlive = false;
    message = "";
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEL.textContent = "Sum: " + sum;

  sumBet += 10;
  player.chips -= 10;
  sumBet += 10;
  playerEl.textContent = player.name.toUpperCase() + ": $" + player.chips;
  betEl.textContent = "Bet: " + sumBet;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlasckJack = true;
    player.chips += sumBet;
    sumBet = 0;
    playerEl.textContent = player.name.toUpperCase() + ": $" + player.chips;
    betEl.textContent = "Bet: " + sumBet;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  //Con esto cambias el texto del HTML, la linea donde coinside el id usado.
  messageEl.textContent = message;
}

function newCard() {
  if (!isAlive || sum > 10) {
    alert("You need to start a new game!");
  } else if (isAlive && hasBlasckJack === false) {
    // si isAlive es true y hasBlasckJack es false
    let card = getRamdomCard(); // Creamos una nueva carta
    sum += card; // sum el nuevo valor al anterior valor de sum
    cards.push(card);
    renderGame(); /* Para activar la funcion startGame(). 
    No olvidemos que cuando llamamos una funcion se ejecuta todo
    lo que esta dentro de las llaves {}, por eso llamamos StartGame(). */
  }
}

function startOver() {
  if (!isAlive || sum === 0) {
    alert("1 You need to start a new game!");
  } else if (isAlive) {
    response = prompt("Are you sure you want to start over? yes or no");
    /* ^ guardamos el valor de prompt en una variable, para poder 
    usarla en el if statement. */
    if (response === "yes") {
      reset();
    } else if (response === "no") {
      console.log("Ok, keep playing!");
    }
    while (response !== "yes" && response !== "no") {
      alert("Please enter yes or no");
      response = prompt("Are you sure you want to start over? yes or no");
    }
  }
}

function reset() {
  newGame();
  player.name = [];
  player.chips = [];
  playerEl.textContent = player.name + "" + player.chips;
}
