import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyA-LDKBR5nSmT09dCee7lCeu4_NI6DezEQ",
    authDomain: "autoreact-91f16.firebaseapp.com",
    projectId: "autoreact-91f16",
    storageBucket: "autoreact-91f16.appspot.com",
    messagingSenderId: "1021315708853",
    appId: "1:1021315708853:web:d092c0c0c13eae40988bfc"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
