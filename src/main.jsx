import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";

import {router} from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <AuthProvider>
    <HelmetProvider>
        <div className="mx-auto max-w-[1200px] lg:px-6 px-5 ">
          <RouterProvider router={router} />
        </div>
        <Toaster /> 
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
