import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('useAuthContext must be inside an AuthcontextProvider')
    }

    return context
}

export default useAuthContext;