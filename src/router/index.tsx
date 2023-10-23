import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "components";
import { Login, ManagerAdmin, Register } from "pages";
import Home from "pages/Home";
import RoomDetail from "pages/RoomDetail";
import RoomList from "pages/RoomList";
import { Binhluan } from "pages/Binhluan";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: PATH.roomDetail,
        element: <RoomDetail></RoomDetail>,
      },
      {
        path: PATH.roomList,
        element: <RoomList></RoomList>,
      },
      {
        path: PATH.ManagerAdmin,
        element: <ManagerAdmin />,
      },
      {
        path: PATH.binhLuan,
        element: <Binhluan></Binhluan>,
      },
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
