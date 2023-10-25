import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import {
  AddLocation,
  AddUser,
  AuthLayout,
  BinhLuanList,
  ListUser,
  MainLayout,
  AddRoom,
  RoomDS,
} from "components";
import { Login, ManagerAdmin, Register } from "pages";
import Home from "pages/Home";
import RoomDetail from "pages/RoomDetail";
import RoomList from "pages/RoomList";
import { Binhluan } from "pages/Binhluan";
import { LocationList } from "components";
import AccountUser from "pages/AccountUser";

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
        path: PATH.binhLuan,
        element: <Binhluan></Binhluan>,
      },
      {
        path: PATH.userInfo,
        element: <AccountUser></AccountUser>,
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
  {
    element: <ManagerAdmin />,
    path: PATH.ManagerAdmin,
    children: [
      {
        element: <ListUser />,
        path: PATH.listUser,
      },
      {
        element: <AddUser />,
        path: PATH.addUser,
      },
      {
        element: <LocationList />,
        path: PATH.locationList,
      },
      {
        element: <AddLocation />,
        path: PATH.addLocation,
      },
      {
        element: <RoomDS />,
        path: PATH.roomDs,
      },
      {
        element: <AddRoom />,
        path: PATH.addRoom,
      },
      {
        element: <BinhLuanList />,
        path: PATH.commentList,
      },
    ],
  },
];
