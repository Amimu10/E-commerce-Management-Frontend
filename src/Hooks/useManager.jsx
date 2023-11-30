import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useManager = () => {
    const {user} = useAuth(); 
    
    const axiosSecure = useAxiosSecure(); 
    const {data: isManager, isPending: isManagerLoading, refetch} = useQuery({  
        queryKey: [user?.email, "isManager"],      
        queryFn: async () => {   
           const res = await axiosSecure.get(`/users/manager/${user?.email}`); 
           console.log(res.data); 
           return res.data.manager;   
        }
    })
    return [isManager, isManagerLoading, refetch];  
};

export default useManager;