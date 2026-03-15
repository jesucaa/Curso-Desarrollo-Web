// Variables para almacenar información de un producto (para la creación de un objeto)
const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

// Objetos
const producto = {
    nombreProducto: nombreProducto, // propiedad: valor
    precio: precio, // propiedad: valor
    disponible: disponible // propiedad: valor
};
// Imprimir el objeto completo
console.log(producto);

// Imprimir una propiedad específica del objeto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// Crear un nuevo objeto utilizando la sintaxis literal
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador web"
};
// Imprimir el objeto persona
console.log(persona);

console.log(`Precio del producto $${producto["precio"]}`); // Acceder a la propiedad precio utilizando notación de corchetes

// Agregar una nueva propiedad al objeto producto
producto.imagen = "imagen.jpg";

// Modificar una propiedad del objeto producto
producto.precio = 350; // Modificar el valor de la propiedad precio del objeto producto

// Eliminar una propiedad del objeto producto
delete producto.disponible; // Eliminar la propiedad disponible del objeto producto

// Imprimir el objeto producto después de las modificaciones
console.log(producto);
