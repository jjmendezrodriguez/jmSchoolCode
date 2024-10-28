// DOM = how use javaScript to modify a website
// Utilisamos document para buscar un elemento en el DOM (Document Object Model)
let countEl = document.getElementById("count-el");
// Este metodo busca el elemento por su id y lo asigna a una varieble.

<h2 id="count-el">0</h2>;
/* la CPU ve esto^ del DOM. Con los method cambiariamos el valor de 0,
si a la variable countEl agremamos el method .innerText = valor querido.
Si quieres interactuar con el DOM usa los metodos:

Metodos para trabajar con textos:

innerText: .innerText property can be used to change the text of HTML elements.
           Devuelve o establece el texto visible de un elemento. 
           útil cuando solo quieres el texto visible. Es ideal para cuando
           necesitas respetar el CSS que oculta o muestra partes del
           contenido.

textContent: Devuelve o establece el contenido textual completo del elemento.
             Todo el texto, incluso el oculto, como espacios cuando usas " - "
             que dejas espacios con este metodo los lee de la forma contextual
             que lo hisiste. muestra y manipula todo el texto en el elemento,
             incluso el que está oculto. Es más rápido en rendimiento porque
             no calcula el CSS para determinar la visibilidad.
*/
