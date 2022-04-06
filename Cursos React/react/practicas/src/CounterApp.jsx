import React from 'react';
import useLogica from './hooks/useLogica';

const CounterApp = () => {

    const [contador, suma, disminuir, reinicioar] = useLogica(5000);

    return (
        <div>
            <h1>Cliks: {contador}</h1>
            <button onClick={suma}>
                Incrementar
            </button>

            <button onClick={disminuir}>
                Disminuir
            </button>

            <button onClick={reinicioar}>
                Reiniciar
            </button>
        </div>
    );
};

export default CounterApp;