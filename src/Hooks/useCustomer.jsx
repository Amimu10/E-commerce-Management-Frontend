import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCustomer = () => {  
    const {user} = useAuth();   
    
    const axiosSecure = useAxiosSecure(); 
    const {data: isCustomer, isPending: isCustomerLoading, refetch} = useQuery({ 
        queryKey: [user?.email, "isCustomer"], 
        queryFn: async () => {
           const res = await axiosSecure.get(`/users/customer/${user?.email}`);  
           console.log(res.data); 
           return res.data?.customer;     
        }
    })
    return [isCustomer, isCustomerLoading, refetch];  
};

export default useCustomer;