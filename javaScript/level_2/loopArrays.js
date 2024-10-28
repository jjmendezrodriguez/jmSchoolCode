// Combaine Loops & Arrays

// index es i:    0       1        2           3     START de 0.
let message = ["hello", "hi", "como estas", "adios"]; //[elements o values]

//      START          FINISH      STEP SIZE
for (let i = 0; i < message.length; i += 1) {
  console.log(message[i]);
  /* ^ Imprime los elemento de message, en el orden de la variable i */
}

/* Usamos i for reference index. Itera desde 0 hasta message.length.
Entra a nuestro array desde START = 0 elemento 0 o donde comiense el for
hasta el ultimo, para eso el uso de .length para que siempre sea el
largo del array, el código puede adaptarse automáticamente a cualquier
cambio en el tamaño del array, al final lo print. */

/*
message[i] representa el elemento actual del array message en la
posición indicada por i. En un bucle for, i es el índice que cambia en 
cada iteración, lo cual permite acceder a cada elemento de message en
secuencia, uno a uno o STEP SIZE.

Para desglosarlo más:

message: Es el array que contiene varios elementos, en este caso,
mensajes como "hello", "hi", "como estas", y "adios".

i: Es el índice del array, que comienza en 0 y aumenta con cada ciclo
del bucle. Este índice se refiere a una posición específica en el array
message.

message[i]: Es el valor del array message en la posición i. 
Si i = 0, message[i] se refiere al primer elemento del array ("hello").
Si i = 1, se refiere al segundo elemento ("hi"), y así sucesivamente.
Entonces, en términos generales, message[i] se describe como
"el elemento actual del array message en la posición especificada por i."
*/

/*
Esto evita repetir:

console.log(message[0]);
console.log(message[1]);
console.log(message[2]);
console.log(message[3]);

*/
