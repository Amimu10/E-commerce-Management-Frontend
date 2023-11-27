


import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";
// import useAxiosSecure from "./UseAxiosSecure";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useContext } from "react";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
// import useAxiosSecure from "./UseAxiosSecure";
// import useAuth from "./useAuth";

const useCart = () => {
const axiosSecure = useAxiosSecure();  
const {user} = useAuth(); 
// const {user} = useAuth(); 
// console.log(user.email);

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