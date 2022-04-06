const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerJSON);

function obtenerJSON() {
    const url = 'data/empleado.json';
    fetch(url)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(resul => {
            mostrarHTML(resul);
        })
}

function mostrarHTML({ empresa, nombre, trabajo, id }) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `


}