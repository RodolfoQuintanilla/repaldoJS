const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

producto.img = "img.jpg";
delete producto.disponible;


console.log(producto);