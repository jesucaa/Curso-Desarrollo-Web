// PO

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}
console.log(producto);

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El nombre del cliente es: ${this.nombre} y su apellido es: ${this.apellido}`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Prototype nos ayudará a crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente1 = new Cliente('Jesús', 'Mendoza');

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente1.formatearCliente());