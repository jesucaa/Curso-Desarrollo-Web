const numero1 = 20;
const numero3 = 30;

console.log(numero1);

// quiere decir que aunq tenga error, el codigo se va a seguir ejecutando. Puedes buscar en google "situaciones en las que podemos usar try catch en js"
try {
    console.log(numero2);
} catch(e) {
    console.log('error');
}

console.log(numero3);