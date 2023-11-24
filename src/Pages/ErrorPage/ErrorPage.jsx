
import { FaHome } from "react-icons/fa";
// import errorImg from "../../assets/error/error.jpg"
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../../public/404.json"; 
const ErrorPage = () => {
    return (
        <div>
            <div className=" mt-6"> 
              <Link to="/">
                <FaHome className="text-5xl text-blue-700  hover:scale-110 duration-300" />
                <p className="text-[32px] font-cinzel font-semibold text-pink-600">Back To Home</p>
              </Link> 
            </div>
            <div className="text-center"> 
                {/* <img className="mx-auto h-[350px]" src={errorImg} alt="error" /> */}
                <Lottie className="h-[350px]" animationData={errorAnimation}></Lottie> 
            </div>
        </div>
    );
};

export default ErrorPage;