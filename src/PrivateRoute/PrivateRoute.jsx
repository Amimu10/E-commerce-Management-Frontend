
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../public/loading.json"; 
 import Lottie from "lottie-react"; 
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const location = useLocation(); 
    if(loading){
       return <div className="w-[320px] mx-auto"><Lottie animationData={Loader} /></div> 
    } 
    if(user) {
        return children;    
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate> 
      
    
};

export default PrivateRoute;