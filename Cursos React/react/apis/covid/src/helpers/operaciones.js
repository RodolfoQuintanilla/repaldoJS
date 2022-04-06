export const totales = (x) => {
    const datos = x;
    return datos.reduce((a, b) => a + b, 0);
};