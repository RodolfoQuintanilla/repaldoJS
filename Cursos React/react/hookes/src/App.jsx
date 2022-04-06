import Contador from "./components/Contador"
import Etiqueta from "./components/Etiqueta"
import Formulario from "./components/Formulario"



function App() {

  //  const [inicio, incrementar, reset, resta] = useContador(0);


  return (

    <>
      <Formulario />
      <hr />
      <Contador />
      <hr />
      <Etiqueta />

    </>

  )
}

export default App
