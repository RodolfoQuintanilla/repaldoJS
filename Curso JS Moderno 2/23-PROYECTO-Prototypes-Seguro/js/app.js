//Constructores
function Seguro(marca, year, seguro) {
    this.marca = marca;
    this.year = year;
    this.seguro = seguro;
}

//Realiza la cotizacion con los datos
Seguro.prototype.CotizarSeguro = function() {

    let cantidad;
    const base = 2000;

    console.log(this.marca);
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
        case '2':
            cantidad = base * 1.05;
        case '3':
            cantidad = base * 1.35;
            break;

        default:
            break;
    }

    //Leer el Año
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año q la diferencia es mayor va reducir el costo
    cantidad -= ((diferencia * 3) * cantidad) / 100;


    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;
    console.log(cantidad);
}


function UI() {

}

//Llena las Opciones de los Años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {

        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

//Muestra alerta en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error')
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //incertar Html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

};

UI.prototype.mostrarResultado = (total, seguro) => {

    const { marca, year, tipo } = seguro;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatco';
            break;
        case 'e':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    //Crear resultadi
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
    
    <p class="header>Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> $ ${textoMarca} </span></p>
    <p class="font-bold">Año: <span class="font-normal"> $ ${year} </span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize"> $ ${tipo} </span></p>
    <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');


    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
};

//Instanciar UI
const ui = new UI();
console.log(ui);



document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años
});

eventListeners();

function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', CotizarSeguro);

}

function CotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //Leer año seleccionado

    const year = document.querySelector('#year').value;


    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son Obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
    //Ocultar Cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultado.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.CotizarSeguro();




    //Inmplementar un prototype
    ui.mostrarResultado(total, seguro);

}