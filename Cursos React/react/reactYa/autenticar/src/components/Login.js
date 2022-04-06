import React, { Fragment, useState } from 'react';
import { auth } from '../firebaseconfig';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,

} from 'firebase/auth';
import Salir from './Salir';

import Errores from './Error';





const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [error, seterror] = useState(false);

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const formu = (e) => {
        e.preventDefault();



    };

    const register = async () => {


        if (email.trim() === '') {
            console.log('mal');
            seterror(true)
            return;
        }
        if (password.trim() === '') {
            seterror(true)
            return;
        }

        else {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password

                );
                console.log(user);

            } catch (error) {

                console.log(error.code);
            }
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
                        onSubmit={formu}
                    >
                        <div className="mb-3">
                            <label className="form-label">Email </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder='Introduce un Email'
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder='Introduce un Password'
                                value={password}
                                onChange={(e) => {
                                    setpassword(e.target.value)
                                }}
                            />

                        </div>
                        {error ? <Errores msj="Erroro perro" /> : null}
                        {error ? <Errores msj="pon el password" /> : null}
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={register}
                        >Registrar Usuario</button>
                    </form>
                </div>
                <div className="col">
                    {user?.email}
                    <Salir
                        logout={logout}
                    />

                </div>
            </div>
        </Fragment>

    );

};

export default Login;