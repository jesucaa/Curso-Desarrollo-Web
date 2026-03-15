// Funciones, parámetros y argumentos
// es decir, javascript procesa las declaraciones de funciones antes de ejecutar el código, lo que permite que la función sumar esté disponible incluso antes de su declaración en el código
function sumar(numero1, numero2) { // Declaración de la función sumar con dos parámetros: numero1 y numero2
    console.log(numero1 + numero2); // Imprime la suma de numero1 y numero2 en la consola
}
sumar(10, 10); // argumetos o los valores reales


const sumar3 = function(n1, n2) {
    console.log(n1 + n2); 
};
sumar3(3, 3); 
