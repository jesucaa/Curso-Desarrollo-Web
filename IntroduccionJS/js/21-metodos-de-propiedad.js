// Simulación de la construcción de un reproductor musical utilizando métodos de propiedad

// Objeto que representa un reproductor musical: tendrá una función para reproducir música
// Métodos de propiedad: son funciones que se asignan como propiedades de un objeto, y se pueden llamar utilizando la sintaxis de punto (objeto.metodo()).
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Música pausada');
    },
    cambiarCancion: function() {
        console.log('Canción cambiada');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    }
};

// Agregar las propiedades por fuera del objeto. Igual hacemos uso del método propiedad
reproductor.eliminarCancion = function(id) {
    console.log(`La canción con el ID: ${id} ha sido eliminada correctamente`);
};
reproductor.reproducirPlaylist = function(nombre) {
    console.log(`Reproduciendo la Playlist: ${nombre}`);
};

reproductor.crearJam = nombreJam => console.log('Jam Creada');

console.log(reproductor);
reproductor.reproducir(123); // Llamamos al método de propiedad para reproducir música
reproductor.pausar(); // Llamamos al método de propiedad para pausar la música
reproductor.cambiarCancion(); // Llamamos al método propiedad para cambiar la música
reproductor.eliminarCancion(921);
reproductor.crearPlaylist('English Songs');
reproductor.reproducirPlaylist('English Songs');
reproductor.crearJam('Ositos Jam');