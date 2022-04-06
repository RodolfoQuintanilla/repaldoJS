const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    //VAlida
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        //Hubo error

        mostrarError('Ambos Campos son Obligatorios');
        return;
    }

    //Consultar la api
    consultarAPI(ciudad, pais)
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
            'max-w-md', 'max-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block>${mensaje}</span>
        `;
        container.appendChild(alerta)


        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad, pais) {


    const appId = '8c591f06a943c0c96e9b3430f9b4afba';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    Spinner();
    fetch(url)
        .then(resp => resp.json())
        .then(respo => {
            limpiarHTML();
            console.log(respo);
            if (respo.cod == '404') {
                mostrarError('no se encuentra')
                return;
            }

            mostrarClima(respo)
        });

}

function mostrarClima(respo) {
    const { name, main: { temp, temp_max, temp_min } } = respo;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);


    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Ciudad en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-6xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados.toFixed(1)} &#8451`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451`;
    tempMaxima.classList.add('text-xl');

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451`;
    tempMinima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultado.classList.add('text-center', 'text-white');
    resultado.appendChild(nombreCiudad);
    resultado.appendChild(actual);
    resultado.appendChild(tempMaxima);
    resultado.appendChild(tempMinima);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);



function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    limpiarHTML()
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
    <div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>
    `;

    resultado.appendChild(divSpinner);
}