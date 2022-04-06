const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    info: {
        medidas: {
            peso: '1kg',
            medida: "1m"
        },
        fabricante: {
            pais: 'china'
        }
    }
};
const { nombre, info: { fabricante } } = producto;

console.log(fabricante);