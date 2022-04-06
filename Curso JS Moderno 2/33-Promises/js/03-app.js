const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;
    if (descuento) {
        resolve('Descuento Aplicado')
    } else {
        reject('No Pude aplicar el descuento')
    }
});

aplicarDescuento.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});