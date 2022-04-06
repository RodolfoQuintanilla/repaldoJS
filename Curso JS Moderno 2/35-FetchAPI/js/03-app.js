const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then(res => res.json())
        .then(rest => console.log(rest))
}