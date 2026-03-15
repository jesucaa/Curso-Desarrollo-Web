// function sumar(n1, n2) { // Declaración de la función sumar con dos parámetros: n1 y n2
//     return n1 + n2; // La función devuelve la suma de n1 y n2
// } 
// const resultado = sumar(5, 7); // Llamada a la función sumar con los argumentos 5 y 7, y se almacena el resultado en la variable resultado
// console.log(resultado); // Imprime el resultado de la suma, que es 12, en la consola

let total = 0; // Declaración de la variable total y asignación del valor inicial 0

function agregarCarrito(precio) { // Declaración de la función agregarCarrito con un parámetro: precio
    return total += precio; // La función agrega el precio al total y devuelve el nuevo total
}

function calcularImpuesto(total) {
    return total * 0.15; // La función calcula el impuesto aplicando una tasa del 15% al total y devuelve el resultado
}

total = agregarCarrito(100); // Llamada a la función agregarCarrito con el argumento 100, y se actualiza el valor de total
total = agregarCarrito(50); // Llamada a la función agregarCarrito con el argumento 50, y se actualiza el valor de total
console.log(`Total del carrito: $${total}`); // Imprime el nuevo total, que es 150, en la consola

console.log(`Se cobra un impuesto del 15% sobre el total del carrito.`); // Imprime un mensaje indicando que se cobrará un impuesto del 15% sobre el total del carrito

const impuesto = calcularImpuesto(total); // Llamada a la función calcularImpuesto con el argumento total, y se almacena el resultado en la variable impuesto
console.log(`Impuesto: $${impuesto}`); // Imprime el valor del impuesto calculado, que es 22.5, en la consola

const precioFinal = total + impuesto; // Cálculo del precio final sumando el total y el impuesto, y se almacena en la variable precioFinal
console.log(`Precio final: $${precioFinal}`); // Imprime el precio final, que es 172.5, en la consola