import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
// import useAuth from "../Hooks/useAuth";
import Lottie from "lottie-react";
import Loader from "../../public/loading.json"; 
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
const AdminRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isAdmin, isAdminLoading] = useAdmin(); 
    const location = useLocation(); 
    if(loading || isAdminLoading){  
        return <Lottie animationData={Loader} /> 
     } 
     if(user && isAdmin) { 
         return children;    
     }
     return <Navigate to="/" state={{form: location}} replace></Navigate> 
};

export default AdminRoute;