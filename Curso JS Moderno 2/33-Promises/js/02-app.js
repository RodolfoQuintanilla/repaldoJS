const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregando: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {

    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('inglaterr', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}
iniciarCallbackHell();