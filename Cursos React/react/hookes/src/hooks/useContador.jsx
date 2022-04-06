import { useState } from 'react'

function useContador(num) {

    const [inicio, setinicio] = useState(num)

    const incrementar = () => {
        setinicio(inicio + 1)
    };
    const resta = () => {
        setinicio(inicio - 1)
    }

    const reset = () => {
        setinicio(num)
    };

    return [
        inicio,
        incrementar,
        reset,
        resta
    ];
}

export default useContador
