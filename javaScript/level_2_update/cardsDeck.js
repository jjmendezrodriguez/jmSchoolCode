// Random card deck ========================================
import { setIsDealer, dealerSumCards } from "./index.js";

const cardsDeck = [
  { value: "A", suit: "♠️" },
  { value: "2", suit: "♠️" },
  { value: "3", suit: "♠️" },
  { value: "4", suit: "♠️" },
  { value: "5", suit: "♠️" },
  { value: "6", suit: "♠️" },
  { value: "7", suit: "♠️" },
  { value: "8", suit: "♠️" },
  { value: "9", suit: "♠️" },
  { value: "10", suit: "♠️" },
  { value: "J", suit: "♠️" },
  { value: "Q", suit: "♠️" },
  { value: "K", suit: "♠️" },

  { value: "A", suit: "♥️" },
  { value: "2", suit: "♥️" },
  { value: "3", suit: "♥️" },
  { value: "4", suit: "♥️" },
  { value: "5", suit: "♥️" },
  { value: "6", suit: "♥️" },
  { value: "7", suit: "♥️" },
  { value: "8", suit: "♥️" },
  { value: "9", suit: "♥️" },
  { value: "10", suit: "♥️" },
  { value: "J", suit: "♥️" },
  { value: "Q", suit: "♥️" },
  { value: "K", suit: "♥️" },

  { value: "A", suit: "♦️" },
  { value: "2", suit: "♦️" },
  { value: "3", suit: "♦️" },
  { value: "4", suit: "♦️" },
  { value: "5", suit: "♦️" },
  { value: "6", suit: "♦️" },
  { value: "7", suit: "♦️" },
  { value: "8", suit: "♦️" },
  { value: "9", suit: "♦️" },
  { value: "10", suit: "♦️" },
  { value: "J", suit: "♦️" },
  { value: "Q", suit: "♦️" },
  { value: "K", suit: "♦️" },

  { value: "A", suit: "♣️" },
  { value: "2", suit: "♣️" },
  { value: "3", suit: "♣️" },
  { value: "4", suit: "♣️" },
  { value: "5", suit: "♣️" },
  { value: "6", suit: "♣️" },
  { value: "7", suit: "♣️" },
  { value: "8", suit: "♣️" },
  { value: "9", suit: "♣️" },
  { value: "10", suit: "♣️" },
  { value: "J", suit: "♣️" },
  { value: "Q", suit: "♣️" },
  { value: "K", suit: "♣️" },
];

const addOne = document.getElementById("add-one");
const addEleven = document.getElementById("add-eleven");
const dialog = document.getElementById("set-card");

const paye = "estoy en if A the player";

function getCardValue(card) {
  const isDealer = setIsDealer();
  let currentSum = Number(dealerSumCards) || 0;

  // Si la carta es del dealer, aplicamos reglas automáticas
  if (isDealer) {
    return getDealerCardValue(card, currentSum);
  }

  // Si la carta es un As ("A"), pedimos al usuario que seleccione el valor
  if (card.value === "A") {
    return new Promise((resolve) => {
      dialog.showModal(); // Muestra el diálogo

      // Definimos las funciones de los botones
      function handleAddOne() {
        dialog.close();
        resolve(1);
        // cleanup(); // Limpia eventos después de resolver
      }

      function handleAddEleven() {
        dialog.close();
        resolve(11);
      }
      cleanup(); // Limpia eventos después de resolver

      // Agregamos los event listeners sin duplicar
      addOne.addEventListener("click", handleAddOne);
      addEleven.addEventListener("click", handleAddEleven);

      // Función para limpiar eventos después de la selección
      function cleanup() {
        addOne.removeEventListener("click", handleAddOne);
        addEleven.removeEventListener("click", handleAddEleven);
      }
    });
  }

  // Para cartas J, Q, K devolvemos 10
  if (["J", "Q", "K"].includes(card.value)) return 10;

  // Para cartas numéricas convertimos el valor a número
  return parseInt(card.value);
}

// Función para manejar el valor de la carta cuando es el dealer
function getDealerCardValue(card, currentSum) {
  if (card.value === "A") {
    return currentSum + 11 > 21 ? 1 : 11; // Se evita pasarse de 21
  }
  if (["J", "Q", "K"].includes(card.value)) return 10;
  return parseInt(card.value);
}

function getRandomCard() {
  let randomIndex = Math.floor(Math.random() * cardsDeck.length);
  return cardsDeck[randomIndex]; // Devuelve un objeto { value: "A", suit: "♠️" }
}

// console.log(getRandomCard());

export { getRandomCard, getCardValue };
