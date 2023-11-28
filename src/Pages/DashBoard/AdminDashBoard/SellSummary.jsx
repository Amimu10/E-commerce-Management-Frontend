import useCart from "../../../Hooks/useCart";
import useProducts from "../../../Hooks/useProducts";
import useSubscription from "../../../Hooks/useSubscription";


const SellSummary = () => {
    const [products] = useProducts(); 
    console.log(products);

    const [subscription] = useSubscription();  
    console.log(subscription); 
     const [cart] = useCart();  
      console.log(cart); 

   const totalSale = cart.reduce((total, item) => (total + item.product_price), 0);

    return (
        <div>
        <h3 className="text-3xl text-center font-inter my-6">information of Sale Summary</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-8">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body"> 
            <h2 className="card-title">Total Income</h2>  
            <p>$ {subscription.product_price}</p>  
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