// correr javascript en modo estricto
"use strict"; // El modo estricto ayuda a evitar errores comunes en JavaScript y mejora la seguridad del código. Al usar "use strict", se activan ciertas restricciones que pueden ayudar a detectar errores y evitar comportamientos no deseados.

// Objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas", // propiedad: valor
    precio: 300, // propiedad: valor
    disponible: true // propiedad: valor
};

Object.freeze(producto); // Congelar el objeto para que no se puedan modificar sus propiedades

// producto.precio = 500; // Intentar modificar una propiedad del objeto congelado (no tendrá efecto)
// producto.imagen = "imagen.jpg"; // Agregar una nueva propiedad al objeto producto

console.log(Object.isFrozen(producto)); // Verificar si el objeto está congelado

console.log(producto);

const usuario = {
    nombre: "Juan",
    edad: 30
};

Object.seal(usuario); // Sellar el objeto para que no se puedan agregar ni eliminar propiedades, pero sí modificar las existentes

usuario.nombre = "Pedro"; // Modificar una propiedad del objeto sellado (sí tendrá efecto)

console.log(Object.isSealed(usuario)); // Verificar si el objeto está sellado
console.log(usuario);

// freeze y seal son métodos que se utilizan para proteger los objetos en JavaScript. freeze impide cualquier modificación al objeto, mientras que seal permite modificar las propiedades existentes pero no agregar ni eliminar propiedades.