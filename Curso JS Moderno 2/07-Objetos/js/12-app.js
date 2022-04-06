//objecct literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

};

// Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}


const producto2 = new Producto('dildo 90 cm', 500);
console.log(producto2);