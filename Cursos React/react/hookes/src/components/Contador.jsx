coimport React from 'react';
import useConta from '../hooks/useConta';


const Contador = () => {

    const [Sumador] = useConta('Nombre', 1)
    const [Sumado] = useConta('Añadir', 5)

    return (
        <div>
            <h1>Contador</h1>
            <Sumador />
            <Sumado />
        </div>
    );
};

export default Contador;