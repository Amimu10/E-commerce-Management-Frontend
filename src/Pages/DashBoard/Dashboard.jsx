// // import useAdmin from "../../Hooks/useAdmin";
// // // import useManager from "../../Hooks/useManager";
// // import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
// // import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";
// // import UserDashboard from "./UserDasboard/UserDashboard";


// // const Dashboard = () => {     
// //     const [isAdmin] = useAdmin(); 
// //     const  [isManager] = useManager(); 
// //     // const isAdmin = true;      

// //     return (      
// //         <div>    
// //         {
// //             isAdmin ? <AdminDashBoard></AdminDashBoard> && 
            
// //           isManager?   : <ShopManangementDashBoard></ShopManangementDashBoard> && 
// //             :
// //             <UserDashboard></UserDashboard>
// //         } 

// //         </div>
// //     );
// // };

// // export default Dashboard;


// import useAdmin from "../../Hooks/useAdmin";
// // import useCustomer from "../../Hooks/useCustomer";
// // import useManager from "../../Hooks/useManager";
// import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
// // import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";
// // import UserDashboard from "./UserDasboard/UserDashboard";

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();
//   // const [isManager] = useManager();
//   // const [isCustomer] = useCustomer(); 

//   return (
//     <div>
//   {
//      isAdmin && <AdminDashBoard></AdminDashBoard>
//   }


    
//     </div>
//   );
// };

// export default Dashboard;



import useCustomer from "../../Hooks/useCustomer";
import useAdmin from "../../Hooks/useAdmin";
import useManager from "../../Hooks/useManager";
import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";
import UserDashboard from "./UserDasboard/UserDashboard";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();
  console.log(isManager); 
  const [isCustomer] = useCustomer();      
  console.log(isCustomer);    
  //  const isCustomer = true;   
  return (
    <div>
     { 
        isAdmin && !isManager && !isCustomer && <AdminDashBoard></AdminDashBoard> 
     } 

     {
      isManager && !isCustomer && !isAdmin && <ShopManangementDashBoard></ShopManangementDashBoard>
     }
     {
       isCustomer && !isAdmin && !isManager && <UserDashboard></UserDashboard> 
     }
    </div>
  );
};

export default Dashboard;
