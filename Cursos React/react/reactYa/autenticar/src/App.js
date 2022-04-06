import { Fragment } from "react/cjs/react.production.min";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Admin from "./components/Admin";
import Login from './components/Login';
import Menu from './components/Menu';
import Uno from './components/Uno';
import Dos from './components/Dos';

function App() {
  return (

    <Fragment>
      <Menu />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="admin" element={<Admin />} />
          <Route path="login" element={<Login />} />
          <Route path="Uno" element={<Uno />} />
          <Route path="Dos" element={<Dos />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
