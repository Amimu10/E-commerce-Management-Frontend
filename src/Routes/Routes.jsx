import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";
// import Login from "../Pages/Login.jsx/LOgin";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateShop from "../Pages/CreateShop/CreateShop";
import WatchDemo from "../Pages/WatchDemo/WatchDemo";
import Dashboard from "../Pages/DashBoard/Dashboard";
import ProductManagement from "../Pages/DashBoard/ShopManager/ProductManagement/ProductManagement";
import SellsCollection from "../Pages/DashBoard/SellsCollection/SellsCollection";
import ShopManangementDashBoard from "../Pages/DashBoard/ShopManager/ProductManagement/ShopManangementDashBoard";
// import { MdAddHome } from "react-icons/md";
import ManageShop from "../Pages/DashBoard/AdminDashBoard/ManageShop";
import AdminDashBoard from "../Pages/DashBoard/AdminDashBoard/AdminDashBoard";
import SellSummary from "../Pages/DashBoard/AdminDashBoard/SellSummary";
import AllUsers from "../Pages/DashBoard/AdminDashBoard/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../../src/PrivateRoute/PrivateRoute";
import ManagerRoute from "../ManagerRoute/ManagerRoute";
import Login from "../Pages/Login.jsx/Login";
import AddProduct from "../Pages/DashBoard/ShopManager/ProductManagement/AddProduct";
import UpdateProduct from "../Pages/DashBoard/ShopManager/ProductManagement/UpdateProduct";
import SalesSummary from "../Pages/DashBoard/ShopManager/ProductManagement/SalesSummary";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createShop",
        element: <CreateShop></CreateShop>,
      },
      {
        path: "/watchDemo",
        element: <WatchDemo></WatchDemo>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    // errorElement: <ErrorPage></ErrorPage>,      
    children: [
      // shop manager routes
      {
        path: "managementHome",  
        element: <ManagerRoute><ShopManangementDashBoard></ShopManangementDashBoard></ManagerRoute>
        
      },
      {
        path: "addProduct",  
        element: <ManagerRoute><AddProduct></AddProduct></ManagerRoute>
      },
     
      {
        path: "productManagement",  
        element: <ManagerRoute><ProductManagement></ProductManagement></ManagerRoute>
      },
      {
        path: "updateProduct/itemUpdate/:id",     
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 
      },
      {
        path: "sellsCollection",  
        element: <ManagerRoute><SellsCollection></SellsCollection></ManagerRoute>
        
      },
      {
        path: "salesSummary",  
        element: <ManagerRoute><SalesSummary></SalesSummary></ManagerRoute>
        
      },

      // system admin routes
      {
        path: "adminHome",    
        element: <AdminRoute><AdminDashBoard></AdminDashBoard></AdminRoute> 
        
      },
      {
        path: "manageShop",     
        element: <AdminRoute><ManageShop></ManageShop></AdminRoute>  
        
      },       
      { 
        path: "sellSummary",     
        element: <AdminRoute><SellSummary></SellSummary></AdminRoute>  
        
      }, 
      {
        path: "allUsers",    
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        
      },
    ],
  },
]);
