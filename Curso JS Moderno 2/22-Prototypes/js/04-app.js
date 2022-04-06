function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;

}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo:${this.saldo}, Cliente:${this.tipoCliente()}`
}
Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


function persona(nombre, saldo, telefono) {
    Cliente.call(this.nombre, saldo);
    this.telefono = telefono;
}


persona.prototype = Object.create(Cliente.prototype);
persona.prototype.constructor = Cliente

//Istancia
const juan = new persona('Juan', 5000, 10112241041);
console.log(juan.nombreClienteSaldo());