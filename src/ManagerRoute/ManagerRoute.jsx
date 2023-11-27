import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Loader from "../../public/loading.json"; 
import useAuth from "../Hooks/useAuth";
import useManager from "../Hooks/useManager";
const ManagerRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isManager, isManagerLoading] = useManager(); 
    const location = useLocation(); 
    if(loading || isManagerLoading){  
        return <Lottie animationData={Loader} /> 
     } 
     if(user && isManager) { 
         return children;    
     }
     return <Navigate to="/" state={{form: location}} replace></Navigate> 
};

export default ManagerRoute;