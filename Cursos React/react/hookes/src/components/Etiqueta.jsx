import useName from "../hooks/useName";



const Etiqueta = () => {

    const [Texto] = useName()
    const [Textea] = useName()
    return (
        <div>
            <Texto />
            <Textea />
        </div >
    );
};

export default Etiqueta;