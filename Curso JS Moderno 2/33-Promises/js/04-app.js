const paises = [];

const nuevoPais = pais => new Promise((resolve) => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
});

nuevoPais('alemania').then(res => {
        console.log(res);
        console.log(paises);

        return nuevoPais('francia')
    })
    .then(res => {
        console.log(res);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(res => {
        console.log(res);
        console.log(paises);
    })