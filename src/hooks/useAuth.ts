import { useContext } from "react";
import { AuthContext } from '../Contexts/AuthContext';


export const useAuth = () => {

    const value = useContext(AuthContext)

    return value;
}