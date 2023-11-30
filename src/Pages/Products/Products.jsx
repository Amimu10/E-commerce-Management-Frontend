import React, { useState } from "react"; // Don't forget to import React

import useProducts from "../../Hooks/useProducts";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useShop from "../../Hooks/useShop";
import 'sweetalert2/dist/sweetalert2.min.css';


const Products = () => {
  const [products,, refetch] = useProducts();       
  const [shop] = useShop();  
  console.log(shop.name);  
  const {user} = useAuth();  
  console.log(products.sellCount);
  const axiosSecure = useAxiosSecure();   
  const navigate = useNavigate();    
  const cartQuantity = 1;      
  const [addedProducts, setAddedProducts] = useState([]);       

const handleAdToCart = (product) => {
    // console.log("add soon");
    if(user && user?.email) {  
        if (addedProducts.includes(product._id)) {
            Swal.fire({  
              title: "Product Already Added",  
              text: "This product is already in your cart.", 
              icon: "warning",  
            });    
            return;    
          }
        //  send cart itm to the database  
        const cartItem = {    
            cartId: product._id,  
            email: user?.email,   
            name: user?.displayName,   
            product_name: product.product_name,    
            product_quantity: product.product_quantity,        
            product_price: product.product_price,        
            product_image: product.product_image,    
            product_category: product.product_category,  
            production_cost: product.production_cost,    
            cartQuantity: cartQuantity,   
            selling_date: new Date()  
        } 
    console.log(cartItem);
       axiosSecure.post("carts", cartItem) 
      .then(res => {  
        if(res.data.insertedId){ 
          toast.success(`${product.product_name} added to your cart`, { duration: 3000 }); 
          // refetch cart product
         
        }
        refetch(); 
        setAddedProducts((prevProducts) => [...prevProducts, product._id]);
      })
  
       }
       else{
        Swal.fire({
          title: "You are not logged in", 
          text: "Please login to add to the cart", 
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!" 
        }).then((result) => { 
          if (result.isConfirmed) { 
            // send user to the login page
            navigate("/login", {state : {form: location}});  
          }
        });
       }
      console.log( user.email);
}


  return (
    <div>
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-semibold font-inter">
          Discover Our Latest Products
        </h2>
        <p className="text-base font-inter mt-3">
          Explore a curated collection of cutting-edge tech products at
          TechBuddy. Whether you're a tech enthusiast or a casual shopper, our
          diverse range of products caters to all needs. From sleek gadgets to
          powerful devices, TechBuddy is your go-to destination for the latest
          in technology. Browse through our offerings below and elevate your
          tech experience with us!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-6  ">
        {products.map((product) => (
          <React.Fragment key={product._id}>
            <div className="card bg-[#F3F3F3] shadow-xl">
              <figure>
                <img src={product.product_image} alt="Shoes" />
              </figure>
              <p className="bg-[#111827] text-white absolute right-0 px-4 py-2 rounded-md mt-4 mr-4 font-inter font-semibold">
                $ {product.product_price} 
              </p>
              <div className="card-body">
                <h2 className="text-[20px] text-[#151515] font-semibold font-inter text-center">
                  {product.product_name} 
                </h2>
                <p className="text-[#737373] text-base text-center font-inter font-normal">
                  Category: {product.product_category}
                </p>
                <div className="card-actions justify-center">
                  <button  onClick={() => handleAdToCart(product)}
                  className="border-b-2 hover:bg-[#111827] hover:text-[#BB8506] border-[#BB8506] p-2 rounded-md font-inter font-medium text-[20px] my-2 text-[#BB8506] bg-[#E8E8E8]">
                    Add To Cart 
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;
