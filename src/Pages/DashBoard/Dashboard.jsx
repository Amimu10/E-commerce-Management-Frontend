// import { Link, NavLink } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";

import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";

// import SellsCollection from "./SellsCollection/SellsCollection";
// import ProductManagement from "./ShopManager/ProductManagement/ProductManagement";
// import { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import SectionTitle from "../../Components/SEctionTitle";

// const Dashboard = () => {
//   const [currentPage, setCurrentPage] = useState("dashboard");

//   const renderPage = () => {
//     switch (currentPage) {
//      case "managementHome":
//     return <SectionTitle heading="Shop Manager DashBoard" subHeading="Wlcome" />;
//       case "productManagement":
//         return <ProductManagement />;
//       case "sellsCollection":
//         return <SellsCollection />;
//       default:
//         return <div></div>;
//     }
//   };
//   return (
//     <div>
//         <Helmet>
//             <title>Tech Buddy | Dshboard</title> 
//         </Helmet>
    
//       <div>
//         <div className="drawer lg:drawer-open">
//           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content flex flex-col ml-8 my-8"> 
//             <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
//               <MdDashboard className="text-4xl hover:scale-125 duration-700 text-pink-700 "></MdDashboard>
//             </label> 
//             {renderPage()}
//           </div>
//           <div className="drawer-side">
//             <label
//               htmlFor="my-drawer-2"
//               aria-label="close sidebar"
//               className="drawer-overlay"
//             ></label>
//             <ul className="menu p-4 lg:mt-8 bg-orange-700 text-base-content">
//               {/* Sidebar content here */} 
//               <li>
//                 <Link 
//                  onClick={() => setCurrentPage("managementHome")}
//                 to="/dashboard">  
//                     Management Home 
//                 </Link>
//               </li>
//               <li>
//                 <NavLink
//                   onClick={() => setCurrentPage("productManagement")}
//                   to="/dashboard/productManagement"
//                 >
//                   Product Management
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   onClick={() => setCurrentPage("sellsCollection")}
//                   to="/dashboard/sellsCollection"
//                 >
//                   Sales Collection
//                 </NavLink>
//               </li>
//               <li>
//                 <Link href="#">Check-Out</Link>
//               </li>
//               <li>
//                 <Link href="#">Subscription & Payment</Link>
//               </li>
//               <li>
//                 <Link href="#">Sales Summary</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



const Dashboard = () => {  
    return (      
        <div>     
            <ShopManangementDashBoard></ShopManangementDashBoard>
        </div>
    );
};

export default Dashboard;