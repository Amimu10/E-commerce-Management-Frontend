import axios from "axios";
import {useNavigate} from "react-router-dom";  
import useAuth from "../Hooks/useAuth"; 
const axiosSecure = axios.create({ 
    baseURL : "https://inventory-management-server-ashy.vercel.app"   
})
const useAxiosSecure = () => {
    const navigate = useNavigate();   
     const {logOut} =  useAuth(); 
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        // console.log("request stopped by interceptor", token); 
        config.headers.authorization = `Bearer ${token}`; 
         return config; 
    }, function(err){
        return Promise.reject(err); 
    });

    // intercepts 401 & 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response; 
    }, async (err) => {
        const status = err.response.status; 
        // console.log("status error", status); 
        if(status === 401 || status === 403){ 
            await logOut(); 
            navigate("/login")
         }
         return Promise.reject(err);
    })
    return axiosSecure; 
};

export default useAxiosSecure; 

