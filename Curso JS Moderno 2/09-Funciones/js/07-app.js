iniciandoApp();

function iniciandoApp() {
    console.log('Iniciandi App...');

    segundaFuncion();
}



function segundaFuncion() {
    console.log('desde la segunda funcion');
    usuario('Roro')
}


function usuario(usu) {
    console.log('Autententicando Usuario.... espere');
    console.log(`Exito ${usu}`);
}