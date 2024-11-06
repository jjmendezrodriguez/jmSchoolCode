// who And logical operators work in JavaScript:

/* para que la logica de 'and' funcione, ambas condiciones deben ser verdaderas.
    si una de las condiciones es falsa, el resultado sera falso y si ambas son falsas
    el resultado sera falso. */

let hasCompletedCourse = true; // convertimos las variables a boolean
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  /* && = el operador logico and. 
  No es necesario poner === true ya que el valor por defecto es boolean. 
  esta para poder esplicarlo. */
  generateCertificate();
  /* ^ Si el valor de hasCompletedCourse y givesCertificate son verdaderos
    ejecuta la funcion generateCertificate() */
}

function generateCertificate() {
  console.log("Generating certificate....");
}
