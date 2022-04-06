import { useState } from 'react';

const useSelectMonedas = (label, opciones) => {


    const [state, setState] = useState('');

    const SelectMonedas = () => {

       
     return    <>

            <div className="mb-3">
                <label>{label}</label>
                <select
                    className="form-select"
                    value={state}
                    onChange={e => setState(e.target.value)}>
                    <option
                    >
                        Seleccione</option>

                    {opciones.map(opcion => (
                        <option
                            key={opcion.id}
                            value={opcion.id}
                        >
                            {opcion.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </>
    }

    return [
        state, SelectMonedas
    ]
};

export default useSelectMonedas;