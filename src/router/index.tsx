import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout, MainLayout } from "components";
import { Login, Register } from "pages";
import { Account } from "pages/Account";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: PATH.account,
        element: <Account />,
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
