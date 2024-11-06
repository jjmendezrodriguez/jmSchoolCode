let randomNumber1 = Math.random(); // Math se escribe con mayuscula. Math.random() no necisita parametros.
/*  ^ Aqui creamos una variable que nos regresa un numero aleatorio entre 0 y 1 sin incluir el 1.,
es un buit-in function de JavaScript para llamarlo usamos Math con mayuscula.*/

console.log(randomNumber1);

let randomNumber = Math.random() * 6; // * 6 = limitado a 5.99999...
/*  ^ Aqui creamos una variable que nos regresa un numero aleatorio entre 0 y 6 sin incluir 6.
Agregando un valor al fina estamos limitando hasta donde puede llegar en este caso 5.99999... */

console.log(randomNumber);

let floorNumber = Math.floor(5.888); // Math.floor() redondea el valor a un entero.
/*  ^ Si usamos .floor(num) redondeamos el numero al entero en este caso 5 */

console.log(floorNumber);

let randomNumber2 = Math.floor(Math.random() * 6); // Math.floor(value) redondea el valor de Math.random() a un entero.
/*  ^ Combinando Math.random() y Math.floor() creamos un numero aleatorio entre 0 y 5 sin incluir 6,
ya que Math.floor() redondea el valor de Math.random() a un entero. */

console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random() * 6) + 1; // agregando + 1 al final del valor de Math.floor() indica start on 1.
/*  ^ Combinando Math.random(), Math.floor() y + 1 creamos un numero aleatorio entre 1 y 6 incluyendo el 6,
ya que Math.floor() redondea el valor de Math.random() a un entero y + 1 indica desde donde empieza el valor. */

console.log(randomNumber3);

let hands = ["rock", "paper", "scissor"];
// Create a function that returns a random item from the array

function game() {
  let playerHand = Math.floor(Math.random() * 3);
  return hands[playerHand]; // change return for console.log to see the result
}

console.log(game()); // Output: rock, paper or scissor
