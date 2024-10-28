// Arrays - ordered lists of items
/*
Sintaxis:
let fruts = ["apples", "bananas", "grapes"]
variable = declaras un array usando corchetes []
El ultimo valor no necesita coma (,). 
En las paginas web they use list on post, skills, ect.

*/
// index es:    0          1          2     START de 0.
let fruts = ["apples", "bananas", "grapes"];

console.log(fruts[1]); // imprime el valor 1
console.log(fruts.length); // cantidad de valores en este caso 3

// Puedes guardar cualquier dataType
let me = ["Jose", 37, true];

let cards = [5, 8];
cards.push(3); // Agrega valores al array con .push("addItem") al final.
console.log(cards);
cards.pop(); // Para remover valores, remueve el ultimo
console.log(cards);
