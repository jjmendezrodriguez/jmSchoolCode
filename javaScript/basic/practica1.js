// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

let name = "Jose Mendez";
let greeting = "Welcome ";

console.log(name + greeting);
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name;

// welcomeEl.innerText = welcomeEl.innerText + " !!";
// innerText = texto interior o texto visible por el DOM
// Usar += funciona para no tener que escribir 2 veces lo mismo ejemplo:
welcomeEl.innerText += "!!!";
// estas diciendo lo mismo mas (+=) "agragas lo nuevo puede ser cualquier data type"
