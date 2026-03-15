// Orden de las operaciones
// Parentesis
// Exponentes
// Multiplicacion y Division
// Suma y Resta
// El orden de las operaciones se puede cambiar usando parentesis
// El resultado de una operacion se puede guardar en una variable
let resultado = 20 + 30 * 2; // El resultado es 80, porque se hace primero la multiplicacion
console.log(resultado);

resultado = (20 + 30) * 2; // El resultado es 100, porque se hace primero la suma
console.log(resultado);

// Supongamos que ofreceremos un descuento del 20% de una carrito de compras, primero debemos calcular el total del carrito, luego el descuento y finalmente restar el descuento al total
resultado = (100 + 200 + 300) * 0.2; // El resultado es 120, porque se hace primero la suma y luego la multiplicacion
console.log(resultado);

// Incrementos
let i = 10;
i++; // El resultado es 11, porque se incrementa el valor de i en 1
    
console.log(i); // 11