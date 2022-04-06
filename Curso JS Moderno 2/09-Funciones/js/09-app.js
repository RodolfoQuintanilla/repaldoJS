const reproductor = {
    reproducir: function(id) {
        console.log(`Reproducir cacion ${id}`);
    },
    pausar: function() {
        console.log('pausando....');
    },
    playList: function(look) {
        console.log(`Cancion agregada a tu playlist ${look}`);
    },
    reproducirPlaylist: function(nom) {
        console.log();
    }
};

reproductor.reproducir(40);
reproductor.reproducir(10)
reproductor.pausar();
reproductor.playList('rock');


reproductor.borrar = function(id) {
    console.log(`Borrando Cancion==> ${id}`);
}

reproductor.borrar(10)