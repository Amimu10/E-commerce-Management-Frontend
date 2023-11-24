import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login.jsx/LOgin";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

       export  const router = createBrowserRouter([
            {
              path: "/",
              element: <MainLayout></MainLayout>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/products",
                    element: <Products></Products> 
                },
                {
                    path: "/services",
                    element: <Services></Services>
                },
                {
                  path: "/login",   
                  element : <Login></Login> 
                },
                {
                  path: "/register",    
                  element : <Register></Register>  
                },
              ]
            },
          ]);


