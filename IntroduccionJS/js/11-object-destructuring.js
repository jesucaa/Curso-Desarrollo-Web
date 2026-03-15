// Objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas", // propiedad: valor
    precio: 300, // propiedad: valor
    disponible: true // propiedad: valor
};
// Imprimir el objeto completo
console.log(producto);

// Acceder a las propiedades de un objeto para extraer su valor y asignarlo a una variable
// Forma tradicional (Forma antigua sin destructuring) 
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(nombreProducto);
// console.log(precioProducto);

// Object Destructuring (Forma moderna con destructuring)
// Distructuring es una forma de extraer valores de un objeto y asignarlos a variables de una manera más concisa y legible.
const {precio, nombreProducto} = producto; // Se extraen las propiedades precio y nombreProducto del objeto producto y se asignan a variables con el mismo nombre

console.log(precio);
console.log(nombreProducto);