function CLiente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new CLiente('Juan', 500);


function formatarCliete(cliente) {
    const { nombre, saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de $ ${saldo}`;

}

function formatarEmpresa(empresa) {
    const { nombre, saldo, categoria } = cliente;
    return `El Cliente ${nombre} tiene un saldo de $ ${saldo} y pertenece a la categoria ${categoria}`;

}


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'cursoso en web');

console.log(formatarEmpresa(CCJ));