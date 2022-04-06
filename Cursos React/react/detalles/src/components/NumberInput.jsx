import React from 'react';
import Resultado from '../components/Resultado'
import PropTypes from 'prop-types';
import { operaciones } from '../helpers/operaciones';


const NumberInput = () => {


    const [numeros, setNumeros] = React.useState({
        numero1: 10,
        numero2: 5
    });

    //const data = operaciones(numeros, setNumeros)
    // console.log(data);


    const {
        handleChange, suma, resta, multi, divi, numero1, numero2
    } = operaciones(numeros, setNumeros)

    return (
        <>
            <label className="mx-2">
                Numero1:
                <input
                    type="number"
                    onChange={handleChange}
                    value={numero1}
                    name='numero1'
                />
            </label>
            <label >
                Numero2:
                <input className="mx-2"

                    type="number"
                    onChange={handleChange}
                    value={numero2}
                    name='numero2'
                />
            </label>


            <Resultado
                operacion="Suma"
                calculo={suma()}
            />
            <Resultado
                operacion="resta"
                calculo={resta()}
            />
            <Resultado
                operacion="multiplicacion"
                calculo={multi()}
            />
            <Resultado
                operacion="Division"
                calculo={divi()}
            />
        </>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput;