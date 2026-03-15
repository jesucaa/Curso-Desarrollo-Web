// Funciones
// Una ventaja de las funciones es que podemos reutilizar el código, lo que hace que nuestro programa sea más eficiente y fácil de mantener. Además, las funciones nos permiten organizar nuestro código en bloques lógicos, lo que facilita la lectura y comprensión del mismo.
// Podemos tener una funcion que valide un formulario y utilizarlo en todos los formularios de nuestra aplicación, en lugar de escribir el mismo código de validación en cada formulario. Esto hace que nuestro código sea más limpio y fácil de mantener, ya que si necesitamos hacer cambios en la validación, solo tenemos que hacerlo en un lugar en lugar de en varios lugares.

// Declaración de una función
function sumar(a, b) {
    console.log(a + b); // Imprime la suma de a y b en la consola
}
sumar(); // NaN (Not a Number) porque no se han pasado argumentos
sumar(5); // NaN porque falta un argumento
sumar(5, 10); // 15

// Expresión de la función
const sumar2 = function() {
    console.log(3 + 3); // Imprime 6 en la consola
};

sumar2(); // 6

// Ejemplo de función con parámetros y retorno de valor
function multiplicar(a, b) {
    return a * b; // Devuelve el producto de a y b
}
const resultado = multiplicar(4, 5); // Almacena el resultado de la multiplicación en la variable resultado
console.log(resultado); // Imprime 20 en la consola

// IIFE: Immediately Invoked Function Expression - Funciones que se invocan ellas mismas
// Estas funciones no se recomiendan tanto para reutilizar código, sino para ejecutar código de forma inmediata sin necesidad de llamarlo posteriormente. Son útiles para crear un ámbito local y evitar la contaminación del espacio global con variables o funciones que solo se necesitan dentro de ese bloque de código.
// Sirven para proteger las variables y que no se mezclen con otro archivo
(function() {
    console.log("Esta función se ejecuta inmediatamente después de ser definida"); // Imprime el mensaje en la consola
})(); // Esta función se ejecuta inmediatamente después de ser definida