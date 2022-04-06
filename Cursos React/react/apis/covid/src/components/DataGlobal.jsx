import { useState } from "react";


const DataGlobal = ({ rend }) => {


    const { ID, Country, CountryCode, Date, NewConfirmed, NewDeaths, Slug, TotalConfirmed, TotalDeaths } = rend





    return (
        <div>
            <h1>{Country}</h1>
            <p>Nuevos Confirmados: {NewConfirmed}</p>
            <p>Nuevas Muertes:{NewDeaths} </p>
            <p>Total Confirmados:{TotalConfirmed}</p>
            <p>Total Muertes: {TotalDeaths}</p>
            <button>Ver mas</button>


        </div>
    );
};

export default DataGlobal;