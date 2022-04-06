"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto);

producto.disponible = false;
producto.img = "img.jpg";

console.log(producto);