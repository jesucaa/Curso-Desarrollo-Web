// Declaración de una función
sumar(2, 3); // si funciona porque las funciones declaradas se elevan (hoisting) al inicio del ámbito, lo que permite su uso antes de su declaración en el código
// es decir, javascript procesa las declaraciones de funciones antes de ejecutar el código, lo que permite que la función sumar esté disponible incluso antes de su declaración en el código
function sumar(a, b) {
    console.log(a + b); // Imprime la suma de a y b en la consola
}

const sumar3 = function() {
    console.log(4 + 4); 
};
sumar3(); // funciona porque sumar3 es una constante que se asigna a una función anónima, y aunque las variables declaradas con const no se elevan, en este caso sumar3 ya está definida como una función en el punto donde se llama, por lo que no hay un error de referencia.

// Expresión de la función
sumar2(); // no funciona, arroja un error de referencia porque sumar2 no está definida en este punto del código
// en este caso, sumar2 es una variable que se asigna a una función anónima, y las variables declaradas con var (o let/const) no se elevan de la misma manera que las funciones declaradas, por lo que sumar2 no está disponible antes de su declaración en el código
sumar2 = function() {
    console.log(3 + 3);
};
