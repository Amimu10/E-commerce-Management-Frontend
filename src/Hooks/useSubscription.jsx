

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
const useSubscription = () => {
const axiosSecure = useAxiosSecure();    
const {user} = useAuth();  

//    tanstack query 
   const { data : subscription = [], isPending: loading, refetch} = useQuery({ 
       queryKey: ["subscription", user?.email],    
       queryFn : async () => {  
         const res = await axiosSecure.get(`/subscription?email=${user?.email}`)      
         return res.data;    
       }
   })
   return [subscription, loading, refetch];  

};

export default useSubscription;