import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Services from "../Services/Services";
import Products from "../Products/Products";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => { 
    return (
        <div>
            <Helmet>
           <title>Tech-Buddy | Home</title>  
            </Helmet> 
            <Banner ></Banner> 
            <Products></Products>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;