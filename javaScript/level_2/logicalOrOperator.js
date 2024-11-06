// Who Or logical operators work in JavaScript:

/* Para que la logica de or funcione, una de las condiciones debe ser true.
   si ambas condiciones son falsas, el resultado sera falso. 
    si una de las condiciones es verdadera, el resultado sera verdadero. */

let likesDocumentaries = true; // convert the variables to boolean
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === false) {
  /* || = el operador logico or. 
      No es necesario poner === true ya que el valor por defecto es boolean. 
      esta para poder esplicarlo. */
  recommendMovie();
  /* ^ Si pasa el if ejecuta la funcion generateCertificate() */
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
