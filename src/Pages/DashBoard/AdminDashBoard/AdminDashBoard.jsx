import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


import ManageShop from "./ManageShop";
import SellSummary from "./SellSummary";
import AllUsers from "./AllUsers";
import SectionTitle from "../../../Components/SEctionTitle";
import { FaHome } from "react-icons/fa";

const AdminDashBoard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "adminHome": 
      return <SectionTitle heading="Shop Manager DashBoard" subHeading="Welcome" />; 
      case "manageShop": 
      return <ManageShop></ManageShop>; 
      case "sellSummary":
        return <SellSummary></SellSummary>; 
      case "allUsers":
        return <AllUsers></AllUsers>; 
    }
  };
  return (
    <div>
        <Helmet>
            <title>Tech Buddy | Admin Dshboard</title> 
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
                <Link 
                 onClick={() => setCurrentPage("adminHome")}
                to="/dashboard/adminHome">  
                    Admin Home 
                </Link>
              </li>
              <li>
                <NavLink 
                  onClick={() => setCurrentPage("manageShop")}
                  to="/dashboard/manageShop"
                >
                 Manage Shop
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={() => setCurrentPage("sellSummary")}
                  to="/dashboard/sellSummary"
                >
                  Sale Summary 
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setCurrentPage("allUsers")} 
                  to="/dashboard/allUsers" 
                >
                 All Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
