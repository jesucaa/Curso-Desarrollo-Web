// Arrays methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.log(meses);

// Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
];

// Quieres ver si marzo existe en el arreglo de meses
// forEach
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    } 
});

// elimiar marzo del arreglo
meses.splice(2, 1); // Elimina 1 elemento a partir del índice 2 (Marzo)
console.log(meses);

// includes - Retorna true o false
let resultado = meses.includes('Marzo');
if (resultado == true) {
    console.log('Marzo existe en el arreglo');
}
if (resultado == false) {
    console.log('Marzo no existe en el arreglo');
}

// some - Retorna true o false, pero se utiliza para arreglos de objetos
// cuando tenemos un arreglo de objetos, includes no funciona, por lo que debemos usar el método some
let existe = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});
if (existe) {
    console.log('El producto existe en el carrito');
} else {
    console.log('El producto no existe en el carrito');
}

// some sin function
const existe2 = carrito.some(producto => producto.nombre === 'Celular');
if (existe2) {
    console.log('El producto existe en el carrito');
} else {
    console.log('El producto no existe en el carrito');
}

// reduce - Reduce el arreglo a un único valor, en este caso el total de la compra
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0); // El segundo parámetro es el valor inicial del total
console.log(resultado);

// reduce sin function
const total = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(total);

// filter - Filtra el arreglo, retorna un nuevo arreglo con los elementos que cumplen la condición
resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
});
console.log(resultado);

// filter sin function
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Celular'); // Elimina del filtro el producto con nombre 'Celular'
console.log(resultado);