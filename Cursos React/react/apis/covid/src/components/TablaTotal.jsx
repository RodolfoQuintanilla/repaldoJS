import React, { useState } from 'react';
import total from '../styles/TablaTotales.module.css';

import graficos from '../img/graficos.png';
import muerte from '../img/muerte.png';
import fiebre from '../img/fiebre.png';
import contagio from '../img/contagio.png';

import { formatearFecha } from '../helpers/index';




const TablaTotal = ({ totalGlobal, diaDeth, confirmadosNuevos, totalConfirmado, fecha }) => {




    return (
        <>
            <div className={total.contenedor}>

                <div className={total.fecha}>
                    <label>Fecha:</label>
                    <input type="text" disabled value={formatearFecha(fecha)} />
                </div>
                <div className={total.contenidoCajas}>

                    <div className={total.caja}>
                        <img className={total.icono} src={contagio} alt='contagio' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Contagio Total</h1>

                            <p>{Number(totalConfirmado).toLocaleString()}</p>
                        </div>
                    </div>
                    <div className={total.caja}>

                        <img className={total.icono} src={fiebre} alt='fiebre' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Nuevos Casos</h1>

                            <p>{Number(confirmadosNuevos).toLocaleString()}</p>
                        </div>

                    </div>

                    <div className={total.caja}>
                        <img className={total.icono} src={graficos} alt='graficos' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Muertes Total</h1>

                            <p>{Number(totalGlobal).toLocaleString()}</p>
                        </div>
                    </div>


                    <div className={total.caja}>
                        <img className={total.icono} src={muerte} alt='muerte' />
                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Nuevas Muertes</h1>

                            <p>{Number(diaDeth).toLocaleString()}</p>
                        </div>
                    </div>


                </div>
                <div className={total.btn}>

                    <a href='!#'>Realiza tu Test</a>
                </div>

            </div>


        </>
    );
};

export default TablaTotal;