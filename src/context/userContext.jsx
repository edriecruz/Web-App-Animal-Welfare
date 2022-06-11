import { createContext, useEffect, useState, useContext } from "react";
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
                    setEmail('err')
                    setPassword('err')
                    setValidating(false)
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
        error, user, loading, validating, message, login, resetPassword, logoutUser,  email, password, setEmail, setPassword    };


    return (
    <UserContext.Provider value={contextValue}>
         {children}
    </UserContext.Provider>
    )
}