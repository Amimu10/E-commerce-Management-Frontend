
import { useQuery } from "@tanstack/react-query";    
// import useAxiosSecure from "../Hooks/useAxiosSecure";    
import useAuth from "./useAuth"; 
import useAxiosSecure from "./UseAxiosSecure"; 

const useCart = () => { 
const axiosSecure = useAxiosSecure();    
const {user} = useAuth(); 

//    tanstack query 
   const { refetch, data : cart = []} = useQuery({ 
       queryKey: ["cart", user?.email],   
       queryFn : async () => { 
         const res = await axiosSecure.get(`/carts?email=${user?.email}`)         
         return res.data;    
       }
   })
   return [cart, refetch];  

};

export default useCart;