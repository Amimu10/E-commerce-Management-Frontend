import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
import Products from "../Products/Products";
import Blog from "../Blog/Blog";
import ClientLogosSection from "../ClientLogosSection;";


const Home = () => { 
    return (
        <div>
            <Helmet>
           <title>Tech-Buddy | Home</title>  
            </Helmet> 
            <Banner ></Banner> 
            <Products></Products>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <ClientLogosSection></ClientLogosSection>
        </div>
    );
};

export default Home;