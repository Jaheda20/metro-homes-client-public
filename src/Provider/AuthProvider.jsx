import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const saveUser = async user =>{
        const currentUser = {
            email: user?.email,
            role: 'user',
            status: 'Verified'
        }
        const {data} = await axios.put(
            `${import.meta.env.VITE_API_URL}/user`, currentUser
        )
        return data
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            console.log('current logged user', currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        // clear previous one
                        // localStorage.removeItem('access-token')
                        // store new
                        localStorage.setItem('access-token', res.data.token)
                        saveUser(currentUser)
                        setLoading(false)
                        
                    }
                    
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        })
        return () => {
            return unsubscribe()
        }
    },[axiosPublic])

    const authInfo = {
        user,
        signUp,
        loading,
        setLoading,
        signIn,
        googleSignIn,
        updateUser,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;