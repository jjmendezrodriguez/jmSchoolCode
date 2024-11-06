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
  /* Si es False, puedes tener un: else if = otra logica, in case the first be False
     they see the next one. Can have else if cuantas quieras,
     pero una vez uno se cumple no revisa los demas. */
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
} else {
  // else aplica cuando ninguna de tu logica se cumplio.
  console.log("You're out of the game! 😭");
}
// Para que revise mas de una condicional debes crear varios if no usar else if

let age = 75;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  // if the age is less than 18
  console.log("child discount");
} else if (age < 27) {
  // if the age is less than 27
  console.log("student discount");
} else if (age < 67) {
  // if the age is less than 67
  console.log("full price");
} else {
  console.log("senior citizen discount");
}
