// this: palabra reservada. Sirve para hacer referencia hacia elementos que están dentro del mismo obejto.

const reservacion = {
    nombre: 'Jesús',
    apellido: 'Mendoza',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();