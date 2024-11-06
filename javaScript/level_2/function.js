let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

/* Note Tips:
    Para editar multibles cosas con el mismo nombre usa ctrl + d. */

/* cuando dejamos una funcion () vacia es porque no necesita parametros.
los parametros son los valores que se le pasan a la funcion para que los use.
En este caso getFastestRaceTime() no necesita o tiene parametros. */

// Aqui creamos una funcion que nos regresa el valor entre player1Time y player2Time
function getTotalRAceTime() {
  return player1Time + player2Time;
}

let totalRaceTime = getTotalRAceTime();
/* ^ Aqui guardamos el valor de la funcion getTotalRAceTime() en la variable totalRaceTime
     para guardar valores de funciones en variables debemos usar el return en la funcion. */
console.log(totalRaceTime);
// ^ Aqui imprimimos el valor de la variable totalRaceTime

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

// Ver file Math.js para explicacion de Math.random() y Math.floor().
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
// ^ Aqui imprimimos el valor de la funcion rollDice(), la funcion que creamos arriba.
