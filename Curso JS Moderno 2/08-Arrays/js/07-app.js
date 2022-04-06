const carrito = [];

/// Definir porducti

const productos = {
    producto: "Monitor",
    precio: 300
}

const producto2 = {
    producto: 'cel',
    precio: '800'
}



carrito.push(productos);
carrito.push(producto2);

const producto3 = {
    producto: 'Teclado',
    precio: 50
}

//carrito.unshift(producto3);



console.table(carrito);