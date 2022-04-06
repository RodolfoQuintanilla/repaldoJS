/**for (let i = 0; i <= 10; i++) {
 * 
    if (i === 5) {
        console.log('Este es el 5');
        continue;
    }
    console.log(i);
} */


const carrito = [
    { nom: "momitor 27 pilgadas", precio: 300 },
    { nom: "LG 27 pilgadas", precio: 5400 },
    { nom: "Samsung 27 pilgadas", precio: 500 },
    { nom: "Motorla 27 pilgadas", precio: 600, decuento: true },
    { nom: "lenovi 27 pilgadas", precio: 700 },
    { nom: "canon 27 pilgadas", precio: 800 },
    { nom: "sony 27 pilgadas", precio: 900 },
    { nom: "nexus  pilgadas", precio: 1000 },
];

for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].decuento) {
        console.log(`el articulo en descuento es: ${carrito[i].nom} `);
        continue;
    }
    console.log(carrito[i].nom);
}