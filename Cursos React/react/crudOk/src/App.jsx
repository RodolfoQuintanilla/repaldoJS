import { useState } from "react";
import Formulario from "./components/Formulario"


function App() {

  const [data, setdata] = useState({});

  return (
    <div className="container mt-4 row">
      <div className="col-6">
        <Formulario
        //setdata={setdata}
        />
      </div>
      <div className="col-6">
        2
      </div>

    </div>
  )
}

export default App
