/* Condicionales or Conditionals
   Las condicionales trabajan con resultados boolean True or False
   Se declara con un if.
   Sintaxis: 
   if (logica) {
    "ejecuta este programa dentro de {llaves}"
   }
     logica = lo que escribes dentro de (parentesis) */
if (sum < 21) {
  // ^ Si tu logica se cumple: True = ejecuta lo que esta dentro de las {llaves}
  console.log("Do you want to draw a new card? 🙂");
  /* Si es False, puedes tener un: else if = otra logica en caso de la primera es False
     puedes tener cuantos else if quieras pero una vez uno se cumple no revisa los demas. */
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  // else aplica cuando ninguna de tu logica se cumplio.
} else {
  console.log("You're out of the game! 😭");
}
// Para que revise mas de una condicional debes crear varios if no usar else if
