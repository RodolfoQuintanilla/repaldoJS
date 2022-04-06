import axios from 'axios';
import { useEffect, useState } from 'react';
import DataGlobal from './DataGlobal';


const ApiRes = () => {

    const [render, setrender] = useState([]);
    const [deth, setdeth] = useState(0);

    let arreglo = [];

    useEffect(() => {

        const respuesta = async () => {
            const url = 'https://api.covid19api.com/summary';
            const resultado = await axios(url);


            try {
                const datosApi = await resultado.data.Countries
                setrender(datosApi);

                sumaMuertes(datosApi);
            } catch (err) {
                console.log(err);
            }
        };
        respuesta();

    }, []);


    const sumaMuertes = (a) => {
        a.map(res => {
            arreglo.push(res.TotalDeaths)
        })

        let total = arreglo.reduce((a, b) => a + b, 0)
        setdeth(total);
    };

    return (
        <div>


            {render.map(rend => (

                <DataGlobal
                    key={rend.ID}
                    rend={rend}
                />



            ))}

        </div>
    );
};

export default ApiRes;