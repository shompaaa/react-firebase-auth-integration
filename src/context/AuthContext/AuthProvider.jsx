import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    //Create User
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Sign In User
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Get Current User
    onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
            console.log('if',currentUser);
        }
        else{
            console.log('else',currentUser);
        }
    })


    const authInfo = {
        createUser,
        signInUser,
    }



    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;