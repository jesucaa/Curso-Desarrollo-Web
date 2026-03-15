// Objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas", // propiedad: valor
    precio: 300, // propiedad: valor
    disponible: true // propiedad: valor
};

const medidas = {
    peso: "1kg",
    medida: "1m"
};

// como buena práctica, no se deben modificar los objetos originales, sino crear uno nuevo con las propiedades de ambos objetos
const nuevoProducto = { ...producto, ...medidas }; // el spread operator (...) permite copiar las propiedades de un objeto a otro, creando un nuevo objeto con las propiedades de ambos objetos

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);