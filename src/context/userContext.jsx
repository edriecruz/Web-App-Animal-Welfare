import { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth'
import { auth } from "../firebase-config";

const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext)


export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState("");
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')

    const login = async (e) => {
        e.preventDefault();
        try{
            signInWithEmailAndPassword(auth, email, password)
        }catch(error){
            alert(error.message)
            setMessage(error);
        }
      }
      
      const resetPassword = async (e) => {
        e.preventDefault();
        try{
            sendPasswordResetEmail(auth, email)
            signOut(auth)
        }catch(error){
            alert(error.message)
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
        signOut(auth)
    }

    const contextValue = {
        user, loading, message, login, logoutUser, setEmail, email, setPassword, resetPassword,
    };


    return (
    <UserContext.Provider value={contextValue}>
         {children}
    </UserContext.Provider>
    )
}