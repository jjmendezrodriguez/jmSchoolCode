/* Grab objects from the DOM

document.querySelector("value")

El método document.querySelector() es una herramienta poderosa
en JavaScript para seleccionar elementos en el 
DOM (Document Object Model).

hay que ser mas especifico en el value si usas: 
# antes del nombre permite seleccionar un elemento por su id.
Con un identificador específico ID, Este selector será único 
porque los id deben ser únicos en el DOM.

<p id="cards-el">Cards:</p>

. antes del nombre selecciona el primer elemento que tenga esa clase.
Usa class en el HTML

<h1 class="title">Blackjack</h1>

solo selecciona el primer elemento que coincida con una 
etiqueta específica, como div, p, etc.
Seleccionaria el primer que encuentres como div, p, ect.
Si quieres seleccionar todos, mencionas querySelectorAll().

Usar selectores combinados permite seleccionar elementos
dentro de otros elementos.
Como contenedores.
*/
