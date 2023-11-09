import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import axios from 'axios';


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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log('current user',currentUser);
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        }) 
        return() =>{
            unSubscribe();
        }
    },[user?.email])
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