import { useState } from 'react';
import { totales } from '../helpers/opera'
import Data from './Data';

const Operaciones = () => {
    const [conatdor, setConatdor] = useState(1);

    const [texto, setTexto] = useState('');

    function writh() {

    }

    return (
        <div>
            Contador:   {conatdor}
            <br />
            <button onClick={totales(conatdor, setConatdor)}>Suma</button>

            <button>Resta</button>

            <hr />

            <Data />
        </div>
    );
};

export default Operaciones;