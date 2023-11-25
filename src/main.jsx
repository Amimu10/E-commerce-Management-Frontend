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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient(); 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="mx-auto max-w-[1200px] lg:px-6 px-5 ">
          <RouterProvider router={router} />
        </div>
        <Toaster /> 
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
