import React, { Fragment, useState } from 'react';

const Salir = ({ logout }) => {

    //const [state, setstate] = useState(initialState);

    return (

        <Fragment>
            <button onClick={logout}> Sign Out </button>
        </Fragment>

    );

};

export default Salir;