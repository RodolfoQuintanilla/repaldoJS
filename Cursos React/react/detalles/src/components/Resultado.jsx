import React from 'react';


const Resultado = ({ operacion, calculo }) => {
    return (
        <div>
            <span> Suma: {operacion}:{calculo}</span>
        </div>
    );
};

export default Resultado;