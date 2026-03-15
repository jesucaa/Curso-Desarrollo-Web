class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // version nueva
    formatearProducto() {
        return `Nombre del producto: ${this.nombre}\nPrecio del producto: $${this.precio}`;
    }

    obtenerPrecio() {
        console.log(`Precio de ${this.nombre}: $${this.precio}`)
    }
}
/* 
Version anterior
Producto.prototype.formatearProducto = function() {
    return `Nombre del producto: ${this.nombre}\nPrecio del producto: $${this.precio}`;
}
*/
const producto1 = new Producto('Monitor Curvo de 49"', 800);

// Herencia: hereda de la clase producto su constructor, sus funciones, sus elementos, etc.
class Libro extends Producto {
    constructor(nombre, precio, categoria) {
        super(nombre, precio);
        this.categoria = categoria;
    }

    formatearProducto() {
        return `${super.formatearProducto()}\nCategoría: ${this.categoria}`;
    }

    obtenerPrecio() {
        super.obtenerPrecio();
    }
}

const libro1 = new Libro('Misery', 600, 'Suspenso');


console.log(producto1.formatearProducto());
console.log(libro1.formatearProducto());

producto1.obtenerPrecio();
libro1.obtenerPrecio();