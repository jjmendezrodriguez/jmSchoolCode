// who And logical operators work in JavaScript:

/* para que la logica de 'and' funcione, ambas condiciones deben ser verdaderas.
    si una de las condiciones es falsa, el resultado sera falso y si ambas son falsas
    el resultado sera falso. */

let hasCompletedCourse = true; // convertimos las variables a boolean
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  // && = el operador logico and.
  generateCertificate();
  /* ^ Si el valor de hasCompletedCourse y givesCertificate son verdaderos
    ejecuta la funcion generateCertificate() */
}

function generateCertificate() {
  console.log("Generating certificate....");
}

/* Tambien podemos evaluar 2 variables booleanas sin compararlas con true o false */

let object1 = true;
let object2 = false;
console.log(object1 && object2); // si ambas variables son verdaderas, el resultado sera verdadero.
/* Puedes guardar el resultado en una variable , tambien podemos evaluar
mas de 2 variables booleanas. */
