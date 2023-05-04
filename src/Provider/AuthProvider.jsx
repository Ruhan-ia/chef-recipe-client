import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

 export    const AuthContext = createContext(null)

 const auth = getAuth(app)
const AuthProvider = ({children}) => {

  
    const [user, setUser] = useState(null)

    const createUser = (email, password, name, photo) =>{
        return createUserWithEmailAndPassword(auth, email, password, name, photo)
    }
    const authInfo = {
            user,
            createUser
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;