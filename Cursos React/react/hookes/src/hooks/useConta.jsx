import { useState } from "react";


const useConta = (name, num) => {

    const [state, setstate] = useState(num)


    const suma = () => {
        setstate(state + 1)
    };

    const sumador = () => (
        <>
            <h2>{state}</h2>
            <button
                type="button"
                className="btn btn-dark"
                onClick={suma}
            >{name}</button>

        </>
    )




    return [

        sumador
    ];
};

export default useConta;