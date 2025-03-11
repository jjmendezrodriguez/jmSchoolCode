import { getRandomCard } from "./cardsDeck.js";
import { youWin } from "./index.js";

// Variables del dealer
let dealerCards = [];
let dealerSum = 0;
let hasBlackJack = false;
let inGame = false;

// Elementos del DOM
const dealerEl = document.getElementById("dealer-cards"); // Donde se muestran las cartas
const sumEl = document.getElementById("dealer-sum"); // Donde se muestra la suma del dealer

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
  dealerSum = firstCardValue + secondCardValue;

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
  sumEl.textContent = `Sum: ${dealerSum}`;

  if (dealerSum < 21) {
    // El dealer toma otra carta si tiene menos de 17
    let newCard = getRandomCard();
    dealerCards.push(newCard);
    dealerSum += getCardValue(newCard, dealerSum);
    showDealerCards();
    renderDGame(); // Llamada recursiva hasta que el dealer tenga 17 o más
  }

  // Verificar estado final del dealer
  if (dealerSum > 21) {
    console.log("Dealer Bust! Dealer pierde.");
    youWin();
  } else if (dealerSum === 21) {
    console.log("Dealer tiene Blackjack!");
    hasBlackJack = true;
  } else {
    console.log(`Dealer se queda con ${dealerSum}`);
  }
}

// Exportar función si es necesario
export { stayHand };
