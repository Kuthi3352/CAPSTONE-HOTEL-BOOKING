import Header from "components/UI/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
