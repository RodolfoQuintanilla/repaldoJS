const carrito = [];

/// Definir porducti

const productos = {
    producto: "Monitor",
    precio: 300
}

const productos2 = {
    producto: 'cel',
    precio: '800'
}

const productos3 = {
    producto: 'Teclado',
    precio: '800'
}

let resultado;

resultado = [...carrito, productos];

resultado = [...resultado, productos2]




console.log(resultado);