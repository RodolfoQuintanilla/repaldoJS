const metodoPago = 'efectivo';


switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con efectivo`);
        pagar()
        break;
    case 'cheque':
        console.log(`Pagaste con cheque`);
        break;
    default:


}

function pagar() {
    console.log('pagando...');
}