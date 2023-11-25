import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login.jsx/LOgin";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateShop from "../Pages/CreateShop/CreateShop";
import WatchDemo from "../Pages/WatchDemo/WatchDemo";
import Dashboard from "../Pages/DashBoard/Dashboard";
import ProductManagement from "../Pages/DashBoard/ShopManager/ProductManagement/ProductManagement";
import SellsCollection from "../Pages/DashBoard/SellsCollection/SellsCollection";
import ShopManangementDashBoard from "../Pages/DashBoard/ShopManager/ProductManagement/ShopManangementDashBoard";
import { MdAddHome } from "react-icons/md";
import ManageShop from "../Pages/DashBoard/AdminDashBoard/ManageShop";
import AdminDashBoard from "../Pages/DashBoard/AdminDashBoard/AdminDashBoard";
import SellSummary from "../Pages/DashBoard/AdminDashBoard/SellSummary";
import AllUsers from "../Pages/DashBoard/AdminDashBoard/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../../src/PrivateRoute/PrivateRoute";


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
  // {
  //   path: "/shopManagerDashboard", // Corrected path
  //   element: <ShopManagerDashBoard></ShopManagerDashBoard>,
  //   children: [
  //     {
  //       path: "shopManagement",
  //       element: <ProductManagement></ProductManagement>,
  //     },
  //   ],
  // },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    // errorElement: <ErrorPage></ErrorPage>,      
    children: [
      {
        path: "managementHome",  
        element: <ShopManangementDashBoard></ShopManangementDashBoard>
        
      },
      {
        path: "addProduct",  
        element: <MdAddHome></MdAddHome> 
        
      },
      {
        path: "productManagement",  
        element: <ProductManagement></ProductManagement>
        
      },
      {
        path: "sellsCollection",  
        element: <SellsCollection></SellsCollection>
        
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
