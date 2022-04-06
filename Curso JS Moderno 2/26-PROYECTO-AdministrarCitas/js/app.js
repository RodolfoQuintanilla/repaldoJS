//Campos de formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//Ui
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');



class Citas {
    constructor() {
        this.citas = [];
    }
    agrearCita(cita) {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
}
class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert', 'd-dlock', 'col-12');

        //Agregar clase en base a tipo de error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Agregar a DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Quitar la alerta despues de 5 Segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);

    }
}

const ui = new UI();
const administrarCitas = new Citas();


//Registrar Eventos
eventListeners();

function eventListeners() {
    mascotaInput.addEventListener('input', datosCitas)
    propietarioInput.addEventListener('input', datosCitas)
    telefonoInput.addEventListener('input', datosCitas)
    fechaInput.addEventListener('input', datosCitas)
    horaInput.addEventListener('input', datosCitas)
    sintomasInput.addEventListener('input', datosCitas)

    formulario.addEventListener('submit', nuevaCita)

}
//Objeto con la info de la cirta
const citaObj = {
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''

    }
    //Agregar datos de cita
function datosCitas(e) {

    citaObj[e.target.name] = e.target.value;

    //Generar Un id Unico
    citaObj.citaObj = Date.now();

    console.log(citaObj);
}


//Valida y agrega Nuevca cita

function nuevaCita(e) {
    e.preventDefault();
    //Extraer la informacion
    const { mascota, propietario, telefon, fecha, hora, sintomas } = citaObj;


    //Valida
    if (mascota === '' || propietario === '' || telefon === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos Los campos son Obligatorios', 'error')
        return;
    }

    //Creando Cita

    administrarCitas.agrearCita({...citaObj });

    //Reinicar objet
    reiniciarObjeto();

    //Reiniciar El formulario
    formulario.reset();


    //Mostrar el Html
    ui.imprimirCitas(administrarCitas);
}


function reiniciarObjeto() {
    citaObj.mascota = '',
        citaObj.propietario = '',
        citaObj.telefono = '',
        citaObj.fecha = '',
        citaObj.hora = '',
        citaObj.sintomas = '';
}