class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
    static bienvenida() {
        return `Bienvenido l cajero`
    }
}

const rodolfo = new Cliente("Rodolfo", 5000);
console.log(rodolfo);


const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const rodolfo2 = new Cliente2("Roro", 1000);
console.log(rodolfo2);