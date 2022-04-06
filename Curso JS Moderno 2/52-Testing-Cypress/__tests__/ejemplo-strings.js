const carrito = ['producto1', 'producto2', 'producto3'];

describe('Testing al carrito de compras', () => {
    test('probar q el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });
    test('Verificar si el carrito esta vacio', () => {
        expect(carrito).not.toHaveLength(1);
    })
})