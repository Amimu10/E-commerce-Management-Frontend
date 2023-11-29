import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
// import Services from "../Services/Services";
// import Products from "../Products/Products";
import Testimonial from "./Testimonial/Testimonial";
import Category from "./Categories/Category";
// import Order from "../Order/Order";
import Products from "../Products/Products";
// import Order from "../Order/Order";

const Home = () => { 
    return (
        <div>
            <Helmet>
           <title>Tech-Buddy | Home</title>  
            </Helmet> 
            <Banner ></Banner> 
            <Category></Category> 
            <Products></Products>
            {/* <Order></Order> */}
            {/* <Services></Services> */}
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;