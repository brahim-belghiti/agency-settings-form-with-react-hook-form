import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import SuccessPage from "./SuccessPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/success", element: <SuccessPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);
