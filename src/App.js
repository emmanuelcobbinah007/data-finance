import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Layout2 from "./Layout/Layout2";
import HomePage from "./Pages/HomePage";
import CompanyPage from "./Pages/CompanyPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
    
      { index: true, element: <HomePage /> },
      { path: 'company', element: <CompanyPage /> },
    ],
  },
  {
    path: '/',
    element: <Layout2 />,
    children: [
    
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },
  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
