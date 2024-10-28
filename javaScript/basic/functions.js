// dec = declaras
// declaration of a funtion on .js:
// dec     name
function increment() {
  // Function body, programa lo que hace tu funcion cada vez que la llamas:
  console.log("The button was clicked");
  // En este caso ^ miestra en la consola: The button was clicked
}

function countDown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

// Esto devuelve 5@1.
countDown(); // Asi llamas a la funcion.

// Variables declarada afuera de la funcion es global todas las funciones la ven.
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
  // esta variable es local solo se lee dentro de la funcion.
  let totalTime = lap1 + lap2 + lap3;
  // que esta llamando variable globales: lap1 + lap2 + lap3;
  console.log(totalTime);
}
// en esta funcion devolvemos el valor total de las variables lap1@3, func. que suma.
logLapTime();

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted = lapsCompleted + 1; // tambien hay otras formas como: ++
}
// Cada vez que declaremos la funcion va a sumar 1 o mult. depende el simbolo que usemos.
incrementLap();
