import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.confic';




const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
// create context 
  export const authContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);


        const signUpWithGoogle = () =>{
            setLoading(true)
          return  signInWithPopup(auth,googleProvider);

        }
        //login with email and password
         const passwordLogIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)

         }
        //  create user and password
        const createUser = (email,password) =>{
            setLoading(true)
          return  createUserWithEmailAndPassword(auth,email,password);
        }
        // logout function
        const logOut = () =>{
            signOut(auth);
        }
        // set observer to observe user
        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                setLoading(false)
            })
            // stop observer while unmounting
            return () =>{
                return unSubscribe();
            }
            
        },[])

    const info = {
        signUpWithGoogle,
        createUser,
        passwordLogIn,
        user,
        logOut,
        loading

    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;