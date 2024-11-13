var root = document.querySelector(":root");
/* Con este selector se obtiene el elemento raíz del documento. Ya que .querySelector() devuelve
el primer elemento que coincida con un selector especificado en el documento. */
console.log(root); // for checking propouse
var rootStyles = getComputedStyle(root);
/* getComputedStyle is a method that returns an object containing the values of all CSS properties
of an element after applying active stylesheets and resolving any basic computation those values may contain. */
var red = rootStyles.getPropertyValue("--red");
console.log("red:", red);

// For setting the value of a variable, you can use the setProperty method on the style property of an element.

root.style.setProperty("--red", "blue");
/* Con esto se cambia el valor de la variable --red a blue.
Ya que root es el elemento raíz del documento, style es una propiedad que devuelve un objeto,
y setProperty es un método que establece un nuevo valor para una propiedad CSS en un elemento.
en este caso buca la variable --red y le asigna el valor blue. */
