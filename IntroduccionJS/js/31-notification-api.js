// simepre que queramos elegir algo del html, iniciamos con document.querySelector('#button') el hashtag es para seleccionar un id
const boton = document.querySelector('#button')

// gracias a js puedes tener un poco más de control sobre que es lo que hacen los usuarios en tu sitio con tu código

boton.addEventListener('click', function() {
    Notification.requestPermission() // recuerda que Notification es un promise por eso podemos ocupar then y catch
        .then(resultado => console.log('El resultado es: ', resultado))
})

// granted: el usuario acepto las notificaciones
// denied: el usuario rechazó las notificaciones

// Si el usuario acepto recibir notificaciones vamos a crear una nueva notificacion

if(Notification.permission == 'granted') {
    // Vamos a instanciar la clase o el objeto Notification
    new Notification('Esta es una notificación', { // 'Esta es un notificación' es el titulo de la notificación
        icon: 'img/ccj.png', // img de la notificación
        body: 'Código con Juan. Los mejores tutoriales.' // texto de la notificación
    })
}