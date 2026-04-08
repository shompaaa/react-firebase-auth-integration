import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider()

    //Create User Info
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Sign In User Info with email & password
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Sign In User with google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //Sign Out User Info
    const signOutUser = ()=>{
        return signOut(auth)
    }

    //Get Current User Info
    useEffect(()=>{
        //set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        //clear the observer on unmount
        return () =>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        
    }



    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;