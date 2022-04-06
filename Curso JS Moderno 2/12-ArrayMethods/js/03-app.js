const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total = 0;
carrito.forEach(producto => {
    total += producto.precio;
});

console.log(total);

let resultado = carrito.reduce((Total, producto) =>
    total + producto.precio, 2500);

console.log(resultado);

let lista = 0;
let uno = carrito.reduce((lista, cosa) =>
    lista + cosa.nombre, 0);

console.log(uno);