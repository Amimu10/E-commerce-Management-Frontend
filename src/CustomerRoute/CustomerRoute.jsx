import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Loader from "../../public/loading.json"; 
import useAuth from "../Hooks/useAuth";
import useManager from "../Hooks/useManager";


const CustomerRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isCustomer, isCustomerLoading] = useManager(); 
    const location = useLocation(); 
    if(loading || isCustomerLoading){  
        return <Lottie animationData={Loader} /> 
     } 
     if(user && isCustomer) { 
         return children;    
     }
     return <Navigate to="/" state={{form: location}} replace></Navigate> 
};

export default CustomerRoute;

