const reproductor = {
    reproducir: id => console.log(`Reproducir cacion ${id}`),
    pausar: () => {
        console.log('pausando....');
    },
    playList: (look) => console.log(`Cancion agregada a tu playlist ${look}`),
    reproducirPlaylist: function(nom) {
        console.log();
    },


    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCacion() {
        console.log(`${this.cancion}`);
    }
};


reproductor.nuevaCancion = 'Musica ligera';
reproductor.obtenerCacion;


reproductor.reproducir(40);
reproductor.reproducir(10)
reproductor.pausar();
reproductor.playList('rock');


reproductor.borrar = function(id) {
    console.log(`Borrando Cancion==> ${id}`);
}

reproductor.borrar(10)