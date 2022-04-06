import { useState } from 'react';

const Formulario = ({ setdata }) => {

    const [nombre, setnombre] = useState({
        textos: '',
        pass: ''
    })

    const handleActualizarState = (e) => {
        setnombre({
            ...nombre, [e.target.name]: e.target.value
        })

    };

    const handleFormulario = (e) => {
        e.preventDefault();
        setdata(nombre)
    };

    return (
        <div>
            <form
                onSubmit={handleFormulario}
            >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Escribe</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe algo..."
                        name='textos'
                        value={nombre.textos}
                        onChange={handleActualizarState}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">passs</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe algo..."
                        name='pass'
                        value={nombre.pass}
                        onChange={handleActualizarState}
                    />

                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    );
};

export default Formulario;