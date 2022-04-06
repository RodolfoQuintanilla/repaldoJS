import { useState } from 'react';

const useLogica = (x) => {
    const [contador, setContador] = useState(x);


    const suma = () => {
        setContador(contador + 1)
    };

    const disminuir = () => {
        setContador(contador - 1)
    };

    const reinicioar = () => {
        setContador(0)
    };


    return [
        contador, suma, disminuir, reinicioar
    ];
};

export default useLogica;