import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import CompanyPage from "./Pages/CompanyPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
    
      { index: true, element: <HomePage /> },
      { path: 'company', element: <CompanyPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
