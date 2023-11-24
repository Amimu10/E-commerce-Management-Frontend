import { FcGoogle } from "react-icons/fc";
import { TERipple } from "tw-elements-react";
// import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; 
import useAxiosPublic from "../../Hooks/useAxiosPublic"; 
import useAuth from "../../Hooks/useAuth"; 

const SocialLogin = () => {
  const navigate = useNavigate(); 
  const {googleSignIn} =  useAuth();  
  const axiosPublic = useAxiosPublic(); 
  const handleGooleSignIn = () => { 
       googleSignIn() 
       .then(result => { 
       
        const userInfo = { 
           email : result.user.email,     
           name: result.user?.displayName      
        }
        axiosPublic.post("/users", userInfo)  
        .then(res => {  
        toast.success("User loggedin Successfully!", { duration: 3000 });    
        navigate("/");      
          console.log(res.data); 

        })


       })
  }
    return (
      <div className="flex items-center">
          <p className="mb-0 mr-4 text-lg">Sign in with</p>
        <TERipple rippleColor="light">
          <button onClick={handleGooleSignIn} 
            type="button"
            className=" bg-white shadow-lg p-2 rounded-full"
          >
            <FcGoogle className=" text-2xl" />
          </button>
        </TERipple>
      </div>
    );
};

export default SocialLogin;