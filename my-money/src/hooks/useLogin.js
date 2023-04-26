import useAuthContext from "./useAuthContext";
import {useState } from 'react';
import { projectAuth } from "../config";


const useLogin = () => {
    //const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
    
        //sign user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
    
            //dispatch logout action
            dispatch({ type: 'LOGIN', payload: res.user})
            
            //update state
            setIsPending(false)
            setError(null) 
/*             if(!isCancelled){

            }*/
    
        } 
        catch(err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            // if(!isCancelled){

            // }
    
        }
    }


    // useEffect(()=>{
    //     return () => setIsCancelled(true)
    //     }, [])
    return { login, error, isPending }

}

export default useLogin;