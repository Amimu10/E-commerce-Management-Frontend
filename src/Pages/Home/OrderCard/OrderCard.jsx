import Swal from 'sweetalert2'
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// import useCart from '../../Hooks/useCart';
// import useAxiosSecure from '../../Hooks/UseAxiosSecure';


const OrderCard = ({ item }) => {

  const { name, image, price, recipe, _id} = item;
  const {user} = useAuth();  
  const navigate = useNavigate(); 
 const location = useLocation(); 
const axiosSecure = useAxiosSecure(); 
const [, refetch] = useProducts();  


 const handleAddToCart = () => { 
     if(user && user?.email) { 
      //  send cart itm to the database 
      const cartItem = {   
        menuId : _id, 
        email : user?.email,  
        name, 
        image,
        price,
        recipe 
      }

     axiosSecure.post("carts", cartItem) 
    .then(res => {  
      if(res.data.insertedId){ 
        toast.success(`${name} added to your cart`, { duration: 3000 }); 
        // refetch cart 
        refetch(); 
      }

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
    <div className="card  bg-[#F3F3F3] shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-[#111827] text-white absolute right-0 px-4 py-2 rounded-md mt-4 mr-4 font-inter font-semibold">$ {price}</p>
      <div className="card-body">
        <h2 className=" text-[20px] text-[#151515] font-semibold font-inter text-center">{name}</h2>
        <p className="text-[#737373] text-base font-inter font-normal">{recipe}</p> 
        <div className="card-actions justify-center">  
          <button onClick={handleAddToCart}  
          
          className=" border-b-2 hover:bg-[#111827] hover:text-[#BB8506] border-[#BB8506] p-2 rounded-md font-inter font-medium text-[20px] my-2 text-[#BB8506] bg-[#E8E8E8] ">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
