import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import React from "react";
import AllResources from "../pages/AllResources/AllResources";
import ManageResource from "../pages/ManageResource/ManageResource";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
    children: [
      {
        path: '/',
        element: <AllResources />
      },
      {
        path: 'manage-resources',
        element: <ManageResource />
      }
    ]
  }
])

export default router