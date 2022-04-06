const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
};

const rex = {
    di1: 'Terodactilo',
    di2: 't-rex'
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

console.log(resultado);



const res2 = {...producto, ...medidas, ...rex }
console.log(res2);