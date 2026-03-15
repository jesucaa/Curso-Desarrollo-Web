// Async / await
/* Ejemplo:
** Si entran 2 personas a un restaurant. Una pide un corte fino y otra pide un vaso de agua
** Tal vez la orden de la persona que pide el corte va a tomar 30 min en hacerse
** y la que pide el vaso de agua va a tardar en menos de 20 segundos
** No vamos a esperar a que esté listo el corte para servirle a la persona que pidió solamente un vaso con agua
*/

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...')

        // setTimeout solo va a ejecutar una vez el mensaje en un tiempo determinado
        setTimeout( () => resolve('Los clientes fueron descargados.'), 3000) // el segundo parametro se representa en milisegundos, osea que 3000 serán 3 segundos lo que se va a tardar
    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...')

        // setTimeout solo va a ejecutar una vez el mensaje en un tiempo determinado
        setTimeout( () => resolve('Los pedidos fueron descargados.'), 5000) // el segundo parametro se representa en milisegundos, osea que 5000 serán 5 segundos lo que se va a tardar
    })
}

/*
// para tirar mensajes en intervalos (cada cierto tiempo) ocupamos setInterval
setInterval( function() {
    console.log('Prueba intervalo')
}, 3000) // es decir, cada que pasen 3 segundos, se ejecutara nuevamente el mensaje
*/

async function app() {
    try {
        // const clientes = await descargarNuevosClientes()
        // const pedidos = await descargarUltimosPedidos()
        // console.log(clientes)
        // console.log(pedidos)

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ])
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app()