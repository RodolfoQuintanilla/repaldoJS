const productos = {
    producto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const { producto } = productos;

console.log(producto);

const num = [10, 20, 30, 40, 50];



const [a, , , ...c] = num;

console.log(c);