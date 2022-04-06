class Cliente {
    constructor(nombre, saldo) {
        super(nombre, saldo);
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

//Herencia 
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {}
}

const rodolfo = new Cliente("Rodolfo", 5000);
const empresa = new Empresa('Código con Juan', 500)
console.log(empresa.mostrarInformacion());