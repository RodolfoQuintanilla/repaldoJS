localStorage.setItem('nombre', 'Rodolfo');
localStorage.setItem('apellido', 'gutierreaz');


const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
console.log(productoString);
localStorage.getz