import nuevaFuncion, { nombreCliente as nc, ahorro, mostaraInformacion, saldoTienes, Cliente } from './cliente.js';



console.log(nombreCliente);

console.log(ahorro);


console.log(mostaraInformacion(nombreCliente, ahorro));

console.log(saldoTienes(ahorro));


const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente);




/* const empresa = new Empresa('Código', 400, 'aprendizaje en Linea');
console.log(empresa); */


console.log(nuevaFuncion());