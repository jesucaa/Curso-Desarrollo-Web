console.log('Array de objetos mostrados con forEach')
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// ForEach recorre los elementos del array: carrito es el nombre del array, element es la variable temporal en donde se va almacenando el mismo array
// solamente para mostrar en pantalla o en consola, no se puede crear un nuevo arreglo
carrito.forEach(element => console.log(element.nombre));

console.log('\n');
console.log('Array de objetos mostrados con map')
// Map: Para crear nuevo arreglo
carrito.map(element => console.log(element.nombre));

//Diferencia entre forEach y map:
// cuando quieras iterar sobre un arreglo y mostrar los elementos en pantalla utiliza forEach
// si quieres crear un nuevo arreglo, entonces utiliza map

const arreglo1 = carrito.forEach(element => element.nombre); // este no hará nada ya que forEach solo sirve para imprimir en pantalla o en consola

const arreglo2 = carrito.map(element => element.nombre); // aqui si va a copiar todo el arreglo de carrito en arreglo2 retornando solamente el nombre

console.log('\n');
console.log(arreglo1); // mostrara undefined
console.log(arreglo2); // mostrara el arreglo creado

const arreglo3 = carrito.map(element => `${element.nombre} - ${element.precio}`); // aqui retornas nombre y precio
console.log(arreglo3);