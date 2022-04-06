let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

function nose(totalPagar) {
    return totalPagar * 100;
}

function si(roro) {
    return roro - 100000;
}

agregarCarrito(100);
agregarCarrito(300);

const totalPagar = calcularImpuesto(total);

const roro = nose(totalPagar);

const chi = si(roro);

console.log(total);
console.log(totalPagar);
console.log(roro);
console.log(chi);