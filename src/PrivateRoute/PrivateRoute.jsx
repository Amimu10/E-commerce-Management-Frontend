
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../public/loader.json"; 
 import Lottie from "lottie-react"; 
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const location = useLocation(); 
    if(loading){
       return <Lottie animationData={Loader} /> 
    } 
    if(user) {
        return children;    
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate> 
      
    
};

export default PrivateRoute;