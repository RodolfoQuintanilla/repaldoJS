function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('Se descargo')
            } else {
                reject('errooor')
            }
        }, 3000);
    })
}


async function ejecutar() {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();
        console.log(2 + 2);

        console.log(respuesta);
    } catch (error) {
        console.log('errrrrrror');
    }
}
ejecutar();