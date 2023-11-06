import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';


export const AuthProvider = createContext(null);
const googleProvider  = new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // createUser/SignUp

    const createUser = (email,password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    // logInUser/SignIn

    const signInUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google SignIn/signUp
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
     // logout
     const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('current user',currentUser);
            setUser(currentUser)
            setLoading(false)
        }) 
        return() =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        createUser,
        signInUser,
        googleSignIn,
        user,
        loading,
        logOut
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};
UserContext.propTypes ={
    children : PropTypes.node
}
export default UserContext;