import useAdmin from "../../Hooks/useAdmin";
// import useManager from "../../Hooks/useManager";
import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";


const Dashboard = () => {     
    const [isAdmin] = useAdmin(); 
    // const  [isManager] = useManager(); 
    // const isAdmin = true;             
    return (      
        <div>    
        {
            isAdmin ? <AdminDashBoard></AdminDashBoard> 
            
            : <ShopManangementDashBoard></ShopManangementDashBoard> 
        } 

        </div>
    );
};

export default Dashboard;


// import useAdmin from "../../Hooks/useAdmin";
// import useManager from "../../Hooks/useManager";
// import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
// import ShopManagementDashBoard from "./ShopManager/ProductManagement/ShopManagementDashBoard";

// const Dashboard = () => {
//     const [isAdmin] = useAdmin();
//     const [isManager] = useManager();

//     return (
//         <div>
//             {isAdmin && <AdminDashBoard />}
//             {isManager && <ShopManagementDashBoard />}
//         </div>
//     );
// };

// export default Dashboard;
