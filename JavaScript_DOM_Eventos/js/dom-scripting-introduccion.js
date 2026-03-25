// Maneras de seleccionar contenido html...

// querySelector: te va a retornar ya sea ninguno o hasta un elemento que concuerde con el selector que estás escribiendo
// document hace referencia a todo el contenido html. Es cuando haces una insercion de html
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elemento
console.log(heading);

const heading2 = document.querySelector('#heading') // retorna 0 o 1 elemento
console.log(heading2);

// para modificar un texto
heading.textContent = 'Nuevo Heading'
// para agregar o eliminar clases
heading.classList.add('nueva-clase')

// querySelectorAll...
const enlaces = document.querySelectorAll('.navegacion a')
// para seleccionar un elemento puedes usar una sintaxis similar a la de los arreglos
console.log(enlaces[0]);
// modificar texto del enlace
enlaces[0].textContent = 'Nuevo texto para enlace'
// cambiar la dirección del enlace (poner toda la url completa del sitio)
enlaces[0].href = 'http://www.google.com'
// agregar nuevas clases y eliminar clases: cuando haces uso de esto, no es necesario iniciar el nombre de las clases con el punto ej: .nuevo-enlace
enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')

// getElementById...
const heading3 = document.getElementById('heading')
console.log(heading3)

// Crear elementos...
// Generar un nuevo enlace: las etiquetas se colocan en mayusculas
const nuevoEnlace = document.createElement('A')
console.log(nuevoEnlace)
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'
// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace'
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')
// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace) // appendChild es para agregarlo a la clase seleccionada

// Eventos...
console.log('1');

// window hace referencia a todo el js incluyendo el html
window.addEventListener('load', imprimir()) // load espera a que el JS y los archivos que dependen del HTML estén listos
// forma diferente de hacer lo de arriba
window.onload = function() {
    console.log('3')
}

document.addEventListener('DOMContentLoaded', function() { // este evento solo espera a que se descargue el html, pero no espera css o imagenes
    console.log(4)
})

console.log('5');

function imprimir() {
    console.log(2)
}

window.onscroll = function() { // Evento al hacer scroll en la pagina
    console.log('scrolling...')
}

// Eventos de los Inputs y los Textarea... (Desde aqui empieza la validación de formularios)
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// Seleccionar elementos y asociarles un evento...
const btnEnviar = document.querySelector('.boton--primario'); // una vez seleccionando un elemento con querySelector tienes a tu disposición el addEventListener
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

/* 
nombre.addEventListener('change', function() { // validación de que se está escribiendo, pero este evento ocurrirá despúes de que termine la acción de escribir. Es decir cuando se de un enter o cuando cambie de elemento
    console.log('Escribiendo...')
})

nombre.addEventListener('input', function(e) {
    console.log(e.target.value) // target.value hace referencia a todo el elemento y muestra en consola lo que vas escribiendo en el input
})
 */

nombre.addEventListener('input', leerTexto) // validación en tiempo real cuando se está escribiendo
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

/* 
// El evento de click...
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento)
    evento.preventDefault() // evitamos la accion por default, es decir, la pagina no se va a recargar al hacer click

    // Validar un formulario

    console.log('enviando formulario')
}) 
*/
// El evento de submit...
formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    // Validar el formulario

    const {nombre, email, mensaje} = datos // Usando distructuring

    // Factorizando (para evitar tanto código)

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true)
        return; // Corta la ejecución de código dentro de un bloque de código (function, bucle, etc)
        // por lo tanto, si se cumple esta condición, no se va a seguiir ejecutando la función... no se va a ejecutar lo de abajo: console.log('Enviando Formulario...')
    }

    mostrarAlerta('Mensaje enviado correctamente')
    limpiarFormulario()
})

/* Usos Submit y Click:
** submit para formularios (submit debe de estar asociado al formulario y el formulario debe de tener obligatoriamente un input de tipo submit)
** click solo debe estar asociado al botón. Asi que, lo puedes ocupar cuando das click en cualquier elemento o una accion por ejemplo: darle me gusta a la foto de alguien, click a una foto, click a un boton de agregar al carrito, etc. */

// Función para reutilizar codigo
function leerTexto(e) {
    // console.log(e.target.value) // recuerda que value va a tener el valor de lo que el usuario escriba

    datos[e.target.id] = e.target.value

    // console.log(e.target) // target hace referencia a toda la etiqueta seleccionada (mostrando sus atributos, etc)

    // console.log(datos)
}

// Refactorizar las alertas del formulario
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    // Que desaparezca después de 3 segundos
    setTimeout(() => alerta.remove(), 3000)
}

function limpiarFormulario() {
    nombre.value = ''
    email.value = ''
    mensaje.value = ''
}