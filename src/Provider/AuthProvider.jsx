import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

 export  const AuthContext = createContext(null)

 const auth = getAuth(app)
const AuthProvider = ({children}) => {

  
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL:photo
        })
       }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,loggedUser =>{
            console.log(loggedUser)
            setUser(loggedUser)
        })
        return () =>{
            unSubscribe()
        }
    }, [])
    const authInfo = {
            user,
            createUser,
            logIn, 
            profileUpdate,
            logOut
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;