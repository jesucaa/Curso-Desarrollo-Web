const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se pudo iniciar sesión');
    }
});

// o
/* const usuarioAutenticado2 = new Promise( function() {

}); */

// si se cumple el promise, puedes usar then para mostrar lo que necesites. En este caso agregamos la respuesta del usuario autenticado del promise
usuarioAutenticado
    .then(function(resultado) { // ejemplo con sintaxis function (puedes hacer uso de arrow function para que ocupes menos lineas de código como se muestra en el catch de abajo)
        console.log(resultado);
    })
    // entonces, esto es similar a un catch. este se ejecuta en caso de que no se cumpla el promise
    .catch(error => console.log(error)); // ejemplo con arrow function

/* En los promises existen 3 valores
** Pending: No se ha cumplido pero tampoco se ha rechazado
** Fulfilled: Ya se cumplió
** Rejected: Se ha rechazado o no se pudo cumplir
*/