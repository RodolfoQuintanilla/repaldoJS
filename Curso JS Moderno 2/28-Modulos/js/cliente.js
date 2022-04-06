export const nombreCliente = 'rodolfo';

export const ahorro = 200;

export function mostaraInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function saldoTienes(ahorro) {
    if (ahorro > 100) {
        console.log('Trienes Saldo');
    } else {
        console.log('No tienes saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostaraInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el xport');
}