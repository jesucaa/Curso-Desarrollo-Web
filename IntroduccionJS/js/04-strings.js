// String o cadena de texto
const producto = "Audifonos Gamer"; // Esta es la forma más común de crear un string, utilizando comillas dobles o simples. Es recomendable usar comillas dobles para strings que contienen comillas simples y viceversa para evitar problemas de sintaxis.
const producto2 = String('Monitor HD'); // Esta es otra forma de crear un string utilizando el constructor String, pero no es tan común ni recomendable como la forma anterior.
const producto3 = new String('Audifonos Gamer'); // No es recomendable usar esta forma de crear un string porque crea un objeto y no un string primitivo, lo que puede causar problemas al comparar o manipular el string.

// con typeof podemos verificar el tipo de dato de una variable, en este caso producto y producto2 son de tipo string, mientras que producto3 es de tipo object debido a que fue creado con el constructor String.
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3); 

// Metodos para strings

// toUpperCase, toLowerCase
console.log(producto.toUpperCase()); // toUpperCase es un método que convierte el string a mayúsculas, pero no modifica el string original, sino que devuelve una nueva cadena con las modificaciones.
console.log(producto.toLowerCase()); // toLowerCase es un método que convierte el string a minúsculas, pero no modifica el string original, sino que devuelve una nueva cadena con las modificaciones.
// Length
console.log(producto.length); // length es una propiedad que nos devuelve la cantidad de caracteres que tiene el string, incluyendo espacios.
// IndexOf
console.log(producto.indexOf('Gamer')); // indexOf es un método que nos devuelve la posición de la primera aparición de una subcadena dentro del string, en este caso devuelve 10 porque 'Gamer' comienza en la posición 10 del string 'Audifonos Gamer'. Si la subcadena no se encuentra, devuelve -1.
// Includes
console.log(producto.includes('Gamer')); // includes es un método que nos devuelve true si la subcadena se encuentra dentro del string, y false si no se encuentra. En este caso devuelve true porque 'Gamer' está presente en 'Audifonos Gamer'.
console.log(producto.includes('gamer')); // includes es un método que nos devuelve true si la subcadena se encuentra dentro del string, y false si no se encuentra. En este caso devuelve false porque 'gamer' con 'g' minúscula no está presente en 'Audifonos Gamer' que tiene 'G' mayúscula.
// startsWith y endsWith
console.log(producto.startsWith('Audi')); // startsWith es un método que nos devuelve true si el string comienza con la subcadena especificada, y false si no es así. En este caso devuelve true porque 'Audifonos Gamer' comienza con 'Audi'.
console.log(producto.endsWith('Gamer')); // endsWith es un método que nos devuelve true si el string termina con la subcadena especificada, y false si no es así. En este caso devuelve true porque 'Audifonos Gamer' termina con 'Gamer'.