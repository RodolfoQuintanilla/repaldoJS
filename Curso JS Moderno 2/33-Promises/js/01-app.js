/* const paises = ['Franci', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 3000);

}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(element => {
            console.log(element);
        });
    }, 1000);

}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises) */

const paises = ['Franci', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 3000);

}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(element => {
            console.log(element);
        });
    }, 1000);

}

mostrarPaises();

nuevoPais('Alemania', mostrarPaises)