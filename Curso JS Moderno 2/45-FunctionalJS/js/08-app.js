const obtenerCliente = () => {
    const nombre = "ro"

    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

cliente = obtenerCliente();

cliente()