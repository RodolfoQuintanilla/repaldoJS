import React, { Fragment } from 'react';

const Error = ({ msj }) => {

    //const [state, setstate] = useState(initialState);

    return (

        <Fragment>
            <div className="alert alert-warning" role="alert">
                {msj}
            </div>
        </Fragment>

    );

};

export default Error;