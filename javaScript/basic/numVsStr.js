let name = 42;
let greeting = "Hi my name is ";
let myGreeting = greeting + name;

/* The str have more dominio que num, si combinas ambos la CPU leera que
   todo es un str, no hay num o valores numericos. */

console.log(myGreeting);
/* ^ Esto imprime Hi my name is 42, ve a 42 como un str. Str is dominante
no importa el orden que este tiene. si es un str va a pensar que todo es
un str, aun sin usar "comillas" en el numero.


/* El uso de simbolos matematicos:
   variavle = a + b, tambien une str
   */

let value = 25 + "4"; // resultado 254
let value1 = 25 + 4; // resultado 29
let value2 = "5" + 4; // resultado 54
let value3 = "hola" + 4; // resultado hola4
