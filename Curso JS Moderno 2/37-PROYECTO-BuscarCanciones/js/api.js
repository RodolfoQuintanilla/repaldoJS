import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(res => res.json())
            .then(rest => {

                if (resultado.lyrics) {
                    const { lyrics } = rest;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cansion: ${this.cancion} de ${this.artista}`
                } else {
                    UI.divMensajes.textContent = 'La cansion no existe, pruea con otra busqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                            UI.divMensajes.textContent = '';
                            UI.divMensajes.classList.remove('error');
                        },
                        3000)
                }

            })
    }
}

export default API;