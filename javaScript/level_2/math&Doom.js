let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage"); // Aqui seleccionas el id del HTML stage
let fightButton = document.getElementById("fightButton"); // Aqui seleccionas el id del HTML fightButton

console.log(fighters.length); // Para saber cuantos elementos tiene el array fighters

fightButton.addEventListener("click", function () {
  // esta function es anonima, no tiene nombre.
  /* With .addEventListener() le das la funcion al boton cuando se haga click
    para que se ejecute la funcion que esta dentro de la funcion anonima.
    Es lo mismo que usar onclick en HTML, pero sin necesidad de nombrar la funcion. */
  let ramdomFither1 = Math.floor(Math.random() * fighters.length);
  let ramdomFither2 = Math.floor(Math.random() * fighters.length);

  stageEl.textContent =
    fighters[ramdomFither1] + " vs " + fighters[ramdomFither2];
});

// using emojis:
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function canastaFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else {
      // can be used else if (fruit[i] === "🍊") too.
      orangeShelf.textContent += "🍊";
    }
  }
}

canastaFruit();

/* for testing use:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div id="apple-shelf"></div>  
        <div id="orange-shelf"></div>
        <script src="index.js"></script>
    </body>
</html>
*/

// CSS:
/*
body {
    padding: 40px;
    background: whitesmoke;
    text-align: center;
}

#apple-shelf {
    background: lightcoral;
    border-radius: 10px;
    height: 30px;
    margin: 10px 0;
}

#orange-shelf {
    background: lightsalmon;
    border-radius: 10px;
    height: 30px;
}
*/
