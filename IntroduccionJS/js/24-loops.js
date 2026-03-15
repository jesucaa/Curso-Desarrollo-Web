// // For loop
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// identifica del 1-10, si el número actual es par o impar

console.log('Identificar numero par con un numero aleatorio del 1-10')
numero = Math.floor(Math.random() * 10) + 1;

if (numero % 2 === 0)
    console.log(`El número ${numero} es par`)
else
    console.log(`El número ${numero} es impar`)

// Ciclo For
console.log('\n');
console.log('Ciclo For:')
for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0)
        console.log(`${i} es par`)

    if(i % 2 === 1)
        console.log(`${i} es impar`)
}

console.log('\n');
console.log('Array de objetos mostrados con for')
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

for (let i = 0; i < carrito.length; i++)
    console.log(carrito[i])

// While Loop: Se evalua primero la condición antes de ejecutar la instruccion
console.log('\n');
console.log('Ciclo While:')
let i = 0;

while(i < 10) { // mientras la condición sea verdadera
    console.log(i);
    i++;
}

let j = 0;

while ( j < 10 ) { 
    if(j % 2 === 0)
        console.log(`${j} es par`);

    if(j % 2 === 1)
        console.log(`${j} es impar`);
    j++;
}

// Do While Loop: primero se ejecuta la instruccion antes de evalular la condición
console.log('\n');
console.log('Ciclo do while:');
let k = 0;

do {
    if(k % 2 === 0)
        console.log(`${k} es par`);

    if(k % 2 === 1)
        console.log(`${k} es impar`);
    k++
} while (k <= 10);