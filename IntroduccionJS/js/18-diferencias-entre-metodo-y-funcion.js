const numero1 = 20;
const numero2 = "20";

// Si deseas convertir el string a numero, puedes usar parseInt o Number
// Estas son funciones, no métodos, porque no están asociadas a un objeto
console.log(parseInt(numero2)); // 20
console.log(Number(numero2)); // 20

// Si deseas convertir el numero a string, puedes usar el método toString
// Este es un método, porque está asociado al objeto numero1
console.log(numero1.toString()); // "20"

// También puedes usar el método String para convertir un numero a string
// Este es un método, porque está asociado al objeto String
console.log(String(numero1)); // "20"

