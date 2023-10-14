import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "components";
import { Login, Register } from "pages";
import { Account } from "pages/Account";
import Home from "pages/Home";
import RoomDetail from "pages/RoomDetail";
import RoomList from "pages/RoomList";
import Booking from "pages/Booking";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        index:true,
        element: <Home></Home>
      },
      {
        path:PATH.roomDetail,
        element: <RoomDetail></RoomDetail>
      },
      {
        path:PATH.roomList,
        element: <RoomList></RoomList>
      },
      {
        path:PATH.booking,
        element:<Booking></Booking>
      }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
