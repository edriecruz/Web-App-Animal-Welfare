import { createContext, useEffect, useState, useContext } from "react";

import {notification} from 'antd'
import {RiStarSmileFill} from 'react-icons/ri'
import {FaSadTear} from 'react-icons/fa'

import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../firebase-config";

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [validating, setValidating] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState("")
 
    const login = async (e) => {
        setValidating(true)
        try{
            signInWithEmailAndPassword(auth, email, password)
            setTimeout(() => {
                if(email === auth.email && password === auth.password){
                    setValidating(false);
                    setEmail(auth.email)
                    setPassword(auth.password)
                }
                else {
                    setEmail(email)
                    setPassword(password)
                    setValidating(false)
                    setError("err")
                }

            }, 2000)
        }catch(error){
            setError(error)
        }
      }
      
      const resetPassword = async (e) => {
        e.preventDefault();
        try{
            setValidating(true)
            sendPasswordResetEmail(auth, email)
            setTimeout(() =>{
                setValidating(false)
            }, 2000)
            signOut(auth)
        }catch(error){
            setError(error)
        }
    }

    const forgotPassword = async (e) => {
        e.preventDefault();
        setValidating(true)
        setTimeout(() => {
            sendPasswordResetEmail(auth, email)
            .then(() => 
                notification.open({
                    icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
                    message:  <> <p className='text-green-500'> Verification Sent</p> </>,
                    duration: 5,
                    description:
                    'Please check your email and follow the link to change your password',
                }))
            .catch((error) => {
                notification.open({
                    icon: <> <FaSadTear className='mt-5 text-red-500'/>   </>,
                    message:  <> <p className='text-red-500'>  Invalid Email </p> </>,
                    duration: 5,
                    description:
                    'Please make sure that you have entered your email correctly.',
                })
            })
            setValidating(false)
            }, 2000)
    }

    useEffect(() => {
        setLoading(true)
        const unsubsribe =onAuthStateChanged(auth, (res) =>{
            res ? setUser(res) : setUser(null)
            setMessage("")
            setLoading(false)
        })
    
        return unsubsribe
    }, [])


    const logoutUser = () => {
        setValidating(true)
        setTimeout(() =>{
            setValidating(false)
        }, 2000)
        signOut(auth) 
        window.location.pathname = "/"
    }

    const contextValue = {
        error, user, loading, 
        validating, message, login, resetPassword,
        logoutUser,  email, password, setEmail, setPassword,
        forgotPassword
        };


    return (
    <UserContext.Provider value={contextValue}>
         {children}
    </UserContext.Provider>
    )
}