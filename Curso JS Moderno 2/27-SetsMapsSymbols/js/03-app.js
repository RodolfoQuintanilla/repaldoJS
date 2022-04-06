const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true)


console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));

console.log(cliente.delete('saldo'));

//cliente.clear()
cliente.forEach((element, index) => {
    console.log(element);
    console.log(index);
});
console.log(cliente);