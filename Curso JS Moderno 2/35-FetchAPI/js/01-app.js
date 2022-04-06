const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url)
        .then(res => {
            console.log(res);

            return res.text();
        })
        .then(datos => {
            console.log(datos);
        })
        .catch(err => {
            console.log(err);
        })
}