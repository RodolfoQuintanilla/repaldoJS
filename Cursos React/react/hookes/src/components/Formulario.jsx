import React from 'react';
import { monedas } from '../date/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';




/* const virtual = [
    { id: 'USD', nombre: 'rrrr' },
    { id: 'MXN', nombre: 'rrrrr' },
    { id: 'EUR', nombre: 'Eooooo' }
] */

const Formulario = () => {



    const [state, SelectMonedas] = useSelectMonedas('Select Monedas We', monedas);
    // const [Selectvirtual] = useSelectMonedas('Select Monedas We', virtual);


    return (
        <div className="container">
            <h1>Formulario</h1>
            <form>

                {state}
                <div>
                    <SelectMonedas />
                    {/*   <Selectvirtual /> */}


                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default Formulario;