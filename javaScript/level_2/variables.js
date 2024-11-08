/* las variables pueden tener distintos valores en .js por eso usamos let 
cuando las declaramos con 'let' luego poder cambiar su valor. En este caso
la declaramos vacia para luego asignarle un valor dependiendo lo que necesitemos
    Ejemplo declara una variable para que luego tenga multibles valores solo
    la dejamos en blanco en su valor asignando un empty str = "" */

let message = "";
let age = 9;

if (age < 10) {
  message = "menor";
} else if (age === 10) {
  message = "10";
} else {
  message = "mayor";
}

console.log(message);
// Al final imprimimos el mensage que aplique dependiendo las conditionals.
