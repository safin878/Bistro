import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import FooTer from "./../Pages/Shared/FooTer";
const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <div className="min-h-[calc(100vh-240px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <FooTer></FooTer>}
    </div>
  );
};

export default Main;
