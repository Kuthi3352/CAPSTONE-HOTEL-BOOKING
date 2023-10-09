import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout } from "components";
export const router: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
      },
      {
        path: PATH.register,
      },
    ],
  },
];
