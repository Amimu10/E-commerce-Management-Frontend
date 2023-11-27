import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useCart from "./useCart";

const useProducts = () => {
  const axiosPublic = useAxiosPublic(); 
  const [carts] = useCart(); 
  const sellCount = carts.reduce((total, item) => total + item.cartQuantity, 0);
  
const {data : products = [], isPending: loading, refetch} = useQuery({ 
    queryKey: ["products"],
    queryFn: async () => {
       const res  = await axiosPublic.get("/products");  
       return res.data; 
    }
})
    return [products, sellCount, loading, refetch]; 
};

export default useProducts;