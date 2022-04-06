import React, { Fragment, useState } from 'react';
import Salir from './Salir';
import {

    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth';
import Error from './Error';

import { auth } from '../firebaseconfig';

const Inicio = () => {


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (

        <Fragment>
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <form
                        onSubmit={(e) => { e.preventDefault() }}
                    >
                        <div className="mb-3">
                            <label className="form-label">Email </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder='Introduce un Email'

                                onChange={(e) => {
                                    setLoginEmail(e.target.value);
                                }}
                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder='Introduce un Password'

                                onChange={(e) => {
                                    setLoginPassword(e.target.value);
                                }}
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={login}
                        >Inicio de secion</button>
                        <br />

                    </form>
                </div>
                <div className="col">

                    <Salir
                        logout={logout}
                    />
                    {user?.email}

                </div>
            </div>
        </Fragment>

    );

};

export default Inicio;