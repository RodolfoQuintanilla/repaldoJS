import axios from 'axios';
import { useEffect, useState } from 'react';

import { sumaarry } from '../helpers/opera';

const Data = () => {

    const [det, setDet] = useState(0);
    const [roro, setRoro] = useState(0);

    useEffect(() => {
        const respuesta = async () => {
            const url = 'https://api.covid19api.com/summary';
            const resultado = await axios(url);

            try {
                const datosApi = await resultado.data.Countries;
                muerteDia(datosApi);
                toro(datosApi);
            } catch (err) {
                console.log(err);
            }
        };
        respuesta()
    }, []);

    let newDeaths = [];
    let newConfirmed = [];


    const muerteDia = (a) => {
        a.map(res => {
            newDeaths.push(res.NewDeaths)
        })
        setDet(sumaarry(newDeaths));
    };

    const confirmadoTolales = (a) => {
        a.map(res => {
            newConfirmed.push(res.NewConfirmed)
        })

        setRoro(sumaarry(newConfirmed));
    };

    return (
        <div>
            Total Muertes:  {det}
            <br />
            no se:{roro}
        </div>
    );
};

export default Data;