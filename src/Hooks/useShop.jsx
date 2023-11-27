import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useShop = () => {
  const axiosPublic = useAxiosPublic(); 
const {data : shops = [], isPending: loading, refetch} = useQuery({ 
    queryKey: ["shop"], 
    queryFn: async () => { 
       const res  = await axiosPublic.get("/shops");  
       return res.data; 
    }
})
    return [shops, loading, refetch]; 
};

export default useShop;