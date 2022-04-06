import React, { Fragment } from 'react';
import { Link, useHistory } from "react-router-dom";


const Menu = () => {



    return (

        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Roro APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Uno" className="nav-link">Uno</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Dos" className="nav-link">Dos</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment >

    );

};

export default Menu;