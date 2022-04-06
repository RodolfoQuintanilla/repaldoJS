const carrito = new Set();

carrito.add('camisa ')
carrito.add('perro #2')
carrito.add('luis #3')
carrito.add('camisa #4')

console.log(carrito.size);
console.log(carrito);


const num = [10, 20, 30, 40, 50, 10, 20, 30, 10];

const noDuplicados = new Set(num);
console.log(noDuplicados);