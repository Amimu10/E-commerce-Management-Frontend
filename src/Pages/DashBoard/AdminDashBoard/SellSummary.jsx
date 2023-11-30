import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useProducts from "../../../Hooks/useProducts";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";


const SellSummary = () => {
  const axiosSecure = useAxiosSecure(); 
    const [products] = useProducts(); 
    console.log(products);
    const [cart] = useCart();  
    console.log(cart); 
  

    const [data, setData] = useState([]); 
    const [totalIncome, setTotalIncome] = useState(0);   

const totalSale = cart.reduce((total, item) => (total + item.cartQuantity  
  ), 0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axiosSecure.get("subscriptionIncome");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [axiosSecure]);

useEffect(() => {
  const newTotalIncome = data.reduce((total, item) => parseInt(total + item.price), 0); 
   setTotalIncome(newTotalIncome);
}, [data])
   

    return (
        <div>
        <h3 className="text-3xl text-center font-inter my-6">information of Sale Summary</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-8">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body"> 
            <h2 className="card-title">Total Income</h2>  
            <p>$ {totalIncome}</p>  
          </div>
        </div>
        <div className="card bg-primary text-primary-content"> 
          <div className="card-body">  
            <h2 className="card-title">Total Product</h2>    
            <p> $ {products.length}</p>   
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Sales</h2> 
            <p>$ {totalSale}</p> 
          </div>
        </div>
      </div>
        </div>
    );
};

export default SellSummary;