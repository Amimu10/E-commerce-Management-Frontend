import { Link, NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";


import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../../../Components/SEctionTitle";   
import { FaHome } from "react-icons/fa";    
import UserCart from "./UserCart";
import SectionTitle from "../../../Components/SEctionTitle";
import UserPayment from "./UserPayment/UserPayment";


const UserDashBoard = () => {
  const location = useLocation(); 
 
  const renderPage = () => {
    if (location.pathname.includes("dashboardHome")) {          
      return <SectionTitle
      
      heading="Customer Dashboard" 
      >
      </SectionTitle>  
  }
  else if (location.pathname.includes("cart")){
       return <UserCart></UserCart> 
  }
  else if (location.pathname.includes("userPayment")){
    return <UserPayment></UserPayment> 
 }  

  };
  return (
    <div>
        <Helmet>
            <title>Tech Buddy | Dshboard</title> 
        </Helmet>
    
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ml-8 my-8"> 
            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
              <MdDashboard className="text-4xl hover:scale-125 duration-700 text-pink-700 "></MdDashboard>
            </label> 
            {renderPage()}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 lg:mt-8 min-h-screen text-white bg-orange-700 font-inter text-base">
              {/* Sidebar content here */} 
              <Link to="/">
                <FaHome className="text-4xl text-blue-700  hover:scale-110 duration-300" />
                <p className="text-[20px] font-cinzel font-semibold text-white mb-6">Back To Home</p>
              </Link> 
              <li>
                <NavLink 
                 
                to="/dashboard/dashboardHome">  
                    Dashboard Home 
                </NavLink>
              </li>
              <li>
                <NavLink 
                 
                to="/dashboard/cart">  
                    Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
