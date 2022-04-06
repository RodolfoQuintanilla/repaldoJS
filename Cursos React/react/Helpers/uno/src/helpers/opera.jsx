export const totales = (conatdor, setConatdor) => {
    const suma = () => {
        setConatdor(conatdor + 1)
        resta()
    };
    const resta = () => {
        console.log('Hola');
    }
    return suma;
};

export const sumaarry = (x) => {
    const datos = x
    return datos.reduce((a, b) => a + b, 0);
}

