import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";   
import Footer from "../Shared/Footer/Footer";  

const MainLayout = () => { 
    const location = useLocation();  
    // console.log(location);
    const noHeaderFooter = location.pathname.includes("/login") ||  location.pathname.includes("/register");
  
    return (
      <div className="overflow-hidden"> 
        {noHeaderFooter || <Navbar />} 
        <Outlet /> 
        {noHeaderFooter || <Footer />}
      </div>
    );
};

export default MainLayout;