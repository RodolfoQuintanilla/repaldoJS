import axios from 'axios';
import { useState, useEffect } from 'react';

import Nav from './components/Nav';
import TablaTotal from './components/TablaTotal';
import { totales } from './helpers/operaciones';
import useDatas from './hooks/useDatas';



function App() {
  const [noseqhago, setnoseqhago] = useState();
  const [totalGlobal, settotalGlobal] = useState(0);
  const [diaDeth, setdiaDeth] = useState(0);
  const [confirmadosNuevos, setConfirmadosNuevos] = useState(0);
  const [totalConfirmado, setTotalConfirmado] = useState(0);
  const [fecha, setfecha] = useState('');
  const [paises, setpaises] = useState([]);

  const [general, setGeneral] = useState([]);
  useEffect(() => {

    const respuesta = async () => {
      const url = 'https://api.covid19api.com/summary';
      const resultado = await axios(url);

      try {
        const datosApi = await resultado.data.Countries;
        setnoseqhago(datosApi)
        muerteDia(datosApi)
        /* sumaMuertes(datosApi) */
        confirmadoTolales(datosApi)
        nuevosCasos(datosApi)
        pais(datosApi)

        setGeneral(datosApi)
      } catch (err) {
        console.log(err);
      }
    };
    respuesta();

  }, []);


  console.log(general);
  // let arreglo = [];
  let newDeaths = [];
  let newConfirmed = [];
  let totalConfirmed = [];
  let mundo = [];

  const [sumaMuertes] = useDatas(general);

  /*  const sumaMuertes = (a) => {
     a.map(res => {
       arreglo.push(res.TotalDeaths)
     })
     settotalGlobal(totales(arreglo))
   }; */


  const muerteDia = (a) => {
    a.map(res => {
      newDeaths.push(res.NewDeaths)
    })
    setdiaDeth(totales(newDeaths));
  };

  const confirmadoTolales = (a) => {
    a.map(res => {
      newConfirmed.push(res.NewConfirmed)
    })
    setConfirmadosNuevos(totales(newConfirmed))
  };

  const nuevosCasos = (a) => {
    const mex = a[111]
    setfecha(mex.Date);
    a.map(res => {
      totalConfirmed.push(res.TotalConfirmed)
    })
    setTotalConfirmado(totales(totalConfirmed))
  };

  const pais = (a) => {
    a.map(res => {
      mundo.push(res.Country)
      setpaises(res.Country)
    })
    setpaises(mundo)
  };
  return (
    < >
      <Nav
        paises={paises}
      />

      <div className='contenedor'>
        <TablaTotal
          totalGlobal={totalGlobal}
          diaDeth={diaDeth}
          confirmadosNuevos={confirmadosNuevos}
          totalConfirmado={totalConfirmado}
          fecha={fecha}
        />
      </div>

    </>
  );
}

export default App;
