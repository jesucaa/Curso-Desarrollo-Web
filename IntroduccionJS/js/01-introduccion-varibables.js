// Variables 
// Palabra reservada var. 
// Iniciar nombre de la variable con letra, guion bajo o signo de dolar. No puede iniciar con numero. No puede contener espacios. Utilizar camelCase.
var producto = 'Audifonos Gamer'; // Iniciamos la variable producto y le asignamos un valor.

var disponible; // Iniciamos la variable disponible sin valor. Por lo tanto, su valor es undefined.

/* producto = true; */ // Reasignamos el valor de la variable producto. Ahora es un booleano.
disponible = true; // Asignamos un valor a la variable disponible.

// Iniciar varias variables al mismo tiempo.
var producto1 = 'Computadoras',
    marca = 'HyperX',
    calificacion = 5;

// Las variables tienen reglas para nombrarlas. No pueden iniciar con numero, no pueden contener espacios, no pueden ser palabras reservadas, etc.
// var 99dias; // Esto no es válido porque inicia con numero.
// var dias de la semana; // Esto no es válido porque contiene espacios.
// var var; // Esto no es válido porque es una palabra reservada.
// var -dias; // Esto no es válido porque inicia con guion.
// var _dias; // Esto es válido porque inicia con guion bajo.
// var $dias; // Esto es válido porque inicia con signo de dolar.
// var diasSemana; // Esto es válido porque inicia con letra y utiliza camelCase.
// var dias_semana; // Esto es válido pero no es recomendable porque no utiliza camelCase.
// var DiasSemana; // Esto es válido pero no es recomendable porque no utiliza camelCase. Las variables en JavaScript suelen iniciar con letra minúscula.

console.log(producto);
console.log(disponible);
console.log(marca);
console.log(calificacion);