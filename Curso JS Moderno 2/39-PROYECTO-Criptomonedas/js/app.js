const cirptoModenedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

const obtenerCritomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas)
})



document.addEventListener('DOMContentLoaded', () => {
    consultarCriptoMonedas();

    formulario.addEventListener('submit', submitFormulario);

    cirptoModenedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
});


function consultarCriptoMonedas() {
    url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

    fetch(url)
        .then(res => res.json())
        .then(resul => obtenerCritomonedas(resul.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;


        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        cirptoModenedasSelect.appendChild(option);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;

}

function submitFormulario(e) {
    e.preventDefault();

    //Validar

    const { moneda, criptomoneda } = objBusqueda;
    if (moneda === "" || criptomoneda === "") {
        mostrarAlerta('Ambos Campos Son Obligatorios');
        return;
    }

    //Consultar la api con los resultados
    consultarAPI();

}

function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error');

    if (!existeError) {


        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        //mensaje error
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);


        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpiner();

    fetch(url)
        .then(res => res.json())
        .then(cotizacion => {
            mostrarCorizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCorizacionHTML(cotizacion) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    limpiarHTML()
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>El precio mas Alto del dia <span>${HIGHDAY}</span></p>`

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>El precio mas Bajo del dia <span>${LOWDAY}</span></p>`

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>El precio las Ultimas 24 Horas <span>${CHANGEPCT24HOUR}%</span></p>`

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>El precio mas Bajo del dia <span>${LASTUPDATE}</span></p>`


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpiner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner')

    spinner.innerHTML = `
    <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
    `
    resultado.appendChild(spinner)
}