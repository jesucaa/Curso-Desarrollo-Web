
// if:
const puntaje = 1000;

// el operador '==': quiere decir que va a comparar pero le va a dar igual que tipo de dato son
// el operador triple '===': es más estricto y si compara que sean identicos
if(puntaje === 1000) { 
    console.log('Si es igual a 1000, asi que, el puntuaje es 1000');
} else {
    console.log('No es igual');
}

if (puntaje !== 1000) // De igual manera existe operador 'diferente a' !==
    console.log('Si es diferente')
else
    console.log('No es diferente a 1000, el puntuaje si es igual a 1000');

// else if: para revisar multiples condiciones(no recomendable)
const roles = ['ADMINISTRADOR', 'EDITOR']

// esto es solo para revisar los indices del arreglo impriendo en pantalla el nombre del rol y su indice
roles.forEach((rol, index) => { // for each con arrow functions
    console.log(rol)
    console.log(index)
}); 

let i = 1;
if (roles[i] === 'ADMINISTRADOR')
    console.log('Acceso a todo el sistema')
else if(roles[i] === 'EDITOR')
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
else 
    console.log('No tienes acceso')

// Switch: mejor opción para revisar multiples condiciones
const metodoPago = 'cheque';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break; // ejecuta primero el codigo y en el break termina que ejecutar el codigo
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}