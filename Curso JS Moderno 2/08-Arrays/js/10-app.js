const carrito = [
    { nom: "momitor 27 pilgadas", precio: 300 },
    { nom: "LG 27 pilgadas", precio: 5400 },
    { nom: "Samsung 27 pilgadas", precio: 500 },
    { nom: "Motorla 27 pilgadas", precio: 600 },
    { nom: "lenovi 27 pilgadas", precio: 700 },
    { nom: "canon 27 pilgadas", precio: 800 },
    { nom: "sony 27 pilgadas", precio: 900 },
    { nom: "nexus  pilgadas", precio: 1000 },
]


const nuevoArreglo = carrito.forEach(function(producto) {
    console.log(producto.nom);
});

const nuevoArreglo2 = carrito.map(function(producto) {
    console.log(producto.nom);
});