import React from 'react';
import styles from '../styles/Nav.module.css';



const Nav = ({ paises }) => {
    //console.log(paises);

    return (
        <div className={styles.navegacion}>
            <h3 className={styles.titulo}>Covid APP</h3>

            <select className={styles.buscador} >



                <option value="">Elije Tu pais</option>




            </select>




        </div >
    );
};

export default Nav;