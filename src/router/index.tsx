import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "components";
import { Login, Register } from "pages";
import { Account } from "pages/Account";
import Home from "pages/Home";
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
