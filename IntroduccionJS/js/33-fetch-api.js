async  function obtenerEmpleados() {
    /* Ejemplo de llamado a api's
    fetch('http://www.google.com/api'); */

    const archivo = 'empleados.json'
    // fetch(archivo)
    //     // resultado es el mismo JSON (el que contiene la variable archivo)
    //     .then(resultado => resultado.json()) // quiere decir que el tipo de respuesta es un json y nos sirve para saber si la conexion fue correcta
    //     // entonces datos es el acceso al archivo json
    //     .then(datos => {
    //         /* console.log(datos) // por lo tanto se imprimen la información del json */

    //         // Imprimiendo datos con destructurig (esta es la mejor manerla de hacerlo)
    //         const { empleados } = datos;
    //         // console.log(empleados); // de esta manera obtenemos los objetos agrupados

    //         empleados.forEach(empleado => {
    //             // console.log(empleado) // de esta manera obtenemos cada uno de los objetos de forma individual
    //             console.log(empleado.id)
    //             console.log(empleado.nombre)
    //             console.log(empleado.puesto)
    //             console.log('\n')

    //             // // Esta es una buena practica para manejar los resultados e imprimirlos en pantalla
    //             // document.querySelector('.contenido').textContent = empleado.nombre // ocupamos esta sintaxis para seleccionar alguna clase del html
    //         });
    //     }) 

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();