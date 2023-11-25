// import useAdmin from "../../Hooks/useAdmin";
import AdminDashBoard from "./AdminDashBoard/AdminDashBoard";
import ShopManangementDashBoard from "./ShopManager/ProductManagement/ShopManangementDashBoard";


const Dashboard = () => {     
    // const [isAdmin] = useAdmin(); 
    const isAdmin = true;             
    return (      
        <div>    
        {
            isAdmin? <AdminDashBoard></AdminDashBoard> 
            :  
            <ShopManangementDashBoard></ShopManangementDashBoard> 
        } 
            
        </div>
    );
};

export default Dashboard;