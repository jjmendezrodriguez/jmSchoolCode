// Random card deck ========================================
import { setIsDealer } from "./index.js";

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
const { isDealer, notDealer } = setIsDealer;

console.log(isDealer + "estoy en deck");

function getCardValue(card) {
  console.log(isDealer);
  if (isDealer) {
    if (card.value === "A") {
      return currentSum + 11 > 21 ? 1 : 11;
    }
    if (["J", "Q", "K"].includes(card.value)) return 10;
    return parseInt(card.value);
  }

  if (card.value === "A") {
    return new Promise((resolve) => {
      dialog.showModal(); // Abre el diálogo

      // Espera la selección del usuario
      addOne.onclick = () => {
        dialog.close();
        resolve(1);
      };

      addEleven.onclick = () => {
        dialog.close();
        resolve(11);
      };
    });
  }

  if (["J", "Q", "K"].includes(card.value)) return 10;
  return parseInt(card.value); // Convierte valores "2" - "10" a números
}

function getRandomCard() {
  let randomIndex = Math.floor(Math.random() * cardsDeck.length);
  return cardsDeck[randomIndex]; // Devuelve un objeto { value: "A", suit: "♠️" }
}

// console.log(getRandomCard());

export { cardsDeck, getRandomCard, getCardValue };
