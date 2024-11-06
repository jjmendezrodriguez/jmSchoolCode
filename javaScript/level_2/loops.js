// Use of loops
//Sintaxis: for loop:
//       START       FINISH     STEP SIZE
for (let count = 1; count < 11; count++) {
  console.log(count);
}
/* ^ Cuenta de 1 en 1 en este caso hasta 10, in FINISH use <=
entonces lo agrega tambien.
Puedes usar count += 1 en STEP SIZE mismo result.
Declaras la variable y su comienso. En la ultima declaracion no need ; */

for (let count = 0; count < 11; count += 2) {
  console.log(count);
}
/* cuenta de 2 en 2 en este caso es como pedir los pares.
La variable solo aplica local en el loop como un index.
Por eso es comun usar i en referencia a index */

for (let i = 0; i < 101; i += 10) {
  console.log(i); // imprime el result of variable only
}

/*
El bucle comienza con i = 0.
La condición i < 5 se verifica antes de cada iteración.
En cada iteración, se imprime el valor actual de i,
y luego se incrementa i en 1 depende de STEP SIZE qie asignes.

iteración = es el proceso de repetir una serie de instrucciones
o pasos varias veces. 
*/
