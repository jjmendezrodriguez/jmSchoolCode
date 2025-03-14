import { getRandomCard } from "./cardsDeck.js";
import { youWin, playerSum, showAlert, betEl, isAlive } from "./index.js";

// Variables del dealer
let dealerCards = [];
let dealerSumCards = 0;
let hasBlackJack = false;
let inGame = false;

// Elementos del DOM
const dealerEl = document.getElementById("dealer-cards"); // Donde se muestran las cartas
const dealerSumEl = document.getElementById("dealer-sum"); // Donde se muestra la suma del dealer

/**
 * Obtiene el valor de la carta, el As se ajusta dinámicamente.
 */

function getCardValue(card, currentSum) {
  if (card.value === "A") {
    return currentSum + 11 > 21 ? 1 : 11;
  }
  if (["J", "Q", "K"].includes(card.value)) return 10;
  return parseInt(card.value);
}

/**
 * Función que inicia la mano del dealer.
 */

function stayHand() {
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
}

/**
 * Muestra las cartas del dealer en pantalla.
 */

function showDealerCards() {
  dealerEl.textContent = `Cards: ${dealerCards
    .map((card) => `${card.value}${card.suit}`)
    .join(" ")}`;
}

/**
 * Actualiza el estado del dealer y decide si debe tomar otra carta.
 */

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
