// Arreglos o Arrays
// Un arreglo es una estructura de datos que nos permite almacenar una colección de elementos, los cuales pueden ser de cualquier tipo de dato, como números, cadenas de texto, objetos, etc. Los arreglos son muy útiles para organizar y manipular datos de manera eficiente en JavaScript.
// los arreglos sirven para agrupar elementos del mismo tipo o relacionados, lo que facilita su manejo y manipulación. Además, los arreglos en JavaScript son dinámicos, lo que significa que pueden crecer o reducirse según sea necesario, y pueden contener elementos de diferentes tipos de datos en el mismo arreglo.


// Crear un arreglo
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
// Nos permite ver el arreglo de una forma más organizada en una tabla
console.table(numeros); 

const mezcla = [10, 'Hola', true, null, undefined, { nombre: 'Juan', trabajo: 'Desarrollador' }, [1, 2, 3]];
console.log(mezcla); 
console.table(mezcla);  

// // Acceder a los elementos de un arreglo
// console.log(numeros[4]); // Output: 50
// console.log(meses[200]); // Output: undefined

// // conocer la longitud de un arreglo
// console.log(numeros.length); // Output: 5

// // recorrer un arreglo con un ciclo forEach
// numeros.forEach(function(numero, index) {
//     console.log(`El número en la posición ${index} es: ${numero}`);
// });

numeros[5] = 60; // Agregar un nuevo elemento al arreglo

console.log(numeros); // Output: [10, 20, 30, 40, 50, 60]

numeros.push(70, 80); // Agregar un nuevo elemento al final del arreglo
numeros.unshift(-10, -20, -30); // Agregar un nuevo elemento al inicio del arreglo

console.log(numeros); // Output: [-10, -20, -30, 10, 20, 30, 40, 50, 60, 70, 80]

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

meses.pop(); // Elimina el último elemento del arreglo
meses.shift(); // Elimina el primer elemento del arreglo

console.log(meses); 
console.table(meses); 

const semanas = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

semanas.splice(2, 3); // Elimina 3 elementos a partir del índice 2 (Miércoles, Jueves, Viernes)
console.log(semanas);

// No es recomdable eliminar los elementos, es mejor crear un nuevo arreglo con los elementos que queremos conservar

// Rest operator o Spread operator para crear una copia del arreglo agregando un nuevo elemento
const nuevoArreglo = [...semanas, 'Feriado']; // esto es equivalente a un push pero sin modificar el arreglo original

console.log(nuevoArreglo);

const nuevoArreglo2 = ['Feriado', ...semanas]; // esto es equivalente a un unshift pero sin modificar el arreglo original

console.log(nuevoArreglo2);