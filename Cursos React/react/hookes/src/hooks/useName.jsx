import { useState } from 'react';

const useName = () => {
    const [state, setstate] = useState('');

    const nombre = () => (
        <>
            <h1>Nombre</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Solo Escribe..."
                value={state}
                onChange={e => setstate(e.target.value)}
            />

        </>

    )


    return [
        nombre
    ];
};

export default useName;