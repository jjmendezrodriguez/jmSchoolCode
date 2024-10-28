// document.getElementById("count-el").innerText = 5;
// dec = declaras
// Utilisamos document para buscar un elemento en el DOM (Document Object Model)
let countEl = document.getElementById("count-el");
/* El .getElementById es buscar el elemento por su id ("id")
lo que este escrito en el id de HTML tiene que ser la misma referencia del HTML,
en este ejemplo <h2 id="count-el">0</h2> */

// Un ejemplo de cambio de valor en una variable aqui comiensa el valor:
let count = 0;

// declaration of a funtion on .js:
// dec     name
function increment() {
  /* Funtion bady, programa lo que hace tu funcion cada vez que la llamas:
aqui llamas la variable y su nuevo valor imprime y le suma 1. */

  // count = count + 1
  // count += 1 otro metodo para subir o contar
  // metodo mas practico ver file practica1.js para explicacion.
  count++;
  /* como funciona
 variable.lee o modifica el texto que es. Ver DOM.js para otras opciones */
  countEl.innerText = count;
  // En este caso la variable count incrementa
  console.log(count); /* luego imprime count, el uso de console.log
  es para verificar and debuger por posibles errores, 
  esto confirma the function do his job. (not need it) */
}
// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  //^(not need it) se usa para revisar que la funcion trabajo.
}

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
}
