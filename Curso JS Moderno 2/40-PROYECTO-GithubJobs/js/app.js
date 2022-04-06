const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');


document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if (busqueda.length < 3) {
        mostrarMensaje('Busqueda muy corta');
        return;
    }
    consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const gitHubUrl = `https://www.freetogame.com/api/games`;
}

function mostrarMensaje(msg) {
    const alertaPrevia = document.querySelector('.alerta')

    if (!alertaPrevia) {


        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = msg;

        formulario.appendChild(alerta);

        setTimeout(() => {
                alert.remove();
            },
            3000);
    }
}