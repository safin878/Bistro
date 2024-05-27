import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "./../Layout/Main";
import Menu from "./../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "./../Pages/Login/Login";
import SingUp from "./../Pages/SingUp/SingUp";
import DashBoard from "./../Layout/DashBoard";
import Cart from "./../Pages/DashBoard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import Alluser from "../Pages/DashBoard/Alluser/Alluser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SingUp></SingUp>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      //Admin Routes
      {
        path: "allUsers",
        element: <Alluser></Alluser>,
      },
    ],
  },
]);
