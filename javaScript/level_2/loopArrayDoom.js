let sentence = ["Hello", "my", "name", "is", "Jose"];
let greetingEl = document.getElementById("greeting-el");
// Lo usamos para manipular el DOM con loop y array.

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// Entramos al array y lo recorremos con un loop para imprimirlo en el DOM.
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " "; // concatenamos el espacio es para separar las palabras.
  /*   ^ Con este metodo poemos imprimir un espacio cada vez que indentamos.
  su resultado en la variable greetingEl asi imprime Hello my name is Jose
  en el front end.*/
}

/* usando += en 'greetingEl.textContent += sentence[i]' para concatenar y mantener
el valor o contenido anterior. si solo usamos = se reemplaza el valor anterior. */
