import { Link, NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import AddProduct from "./AddProduct";
import ProductManagement from "./ProductManagement";
import UpdateProduct from "./UpdateProduct";
import SalesSummary from "./SalesSummary";
import Subscription from "../Subscription";
import Payment from "./Payment/Payment";
import SectionTitle from "../../../../Components/SEctionTitle";
import SalesCollection from "./SalesCollection";
import Checkout from "../Checkout";

const ShopManangementDashBoard = () => {
  const location = useLocation(); 
 
  const renderPage = () => {
    if (location.pathname.includes("managementHome")) {          
      return <SectionTitle heading="Sop Manager Dashboard"
      />    
  }
  else if (location.pathname.includes("productManagement")){
    return <ProductManagement></ProductManagement>
 } 
    else if (location.pathname.includes("addProduct")){ 
       return <AddProduct></AddProduct>    
  } 
    else if (location.pathname.includes("salesCollection")){ 
       return <SalesCollection></SalesCollection>    
  } 
    else if (location.pathname.includes("updateProduct")){    
       return <UpdateProduct></UpdateProduct>
  } 
    else if (location.pathname.includes("salesSummary")){
       return <SalesSummary></SalesSummary> 
  }
else if (location.pathname.includes("subscription")){
   return <Subscription></Subscription>
}  
else if (location.pathname.includes("payment")){
   return <Payment></Payment>
}  
else if (location.pathname.includes("checkout")){
   return <Checkout></Checkout>
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
                 
                to="/dashboard/managementHome">  
                    Management Home 
                </NavLink>
              </li>
              <li>
                <NavLink
              
                  to="/dashboard/productManagement"
                >
                  Product Management
                </NavLink>
              </li>
              <li>
                <NavLink 
                
                  to="/dashboard/addProduct"
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
               
                  to="/dashboard/salesCollection"
                >
                  Sales Collection
                </NavLink>
              </li>
              <li>
                <NavLink 
               
                  to="/dashboard/subscription"
                >
                  Subscription & Payment  
                </NavLink>   
              </li> 
              <li>
                <NavLink 
                
                  to="/dashboard/salesSummary"
                >
                  Sales Summary
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopManangementDashBoard;
