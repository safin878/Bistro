import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import "../../../src/App.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoMdCart } from "react-icons/io";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
  const { User, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Navbar className="fixed z-10 w-full  navbar-bg-opacity">
      <NavbarBrand>
        <img
          src="https://i.postimg.cc/WzQ3NVKt/Default-Make-Logo-Using-this-name-Bistro-Boss-3.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bistro Boss
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {User && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={User.photoURL} rounded />}
          >
            <DropdownHeader>
              <span className="block text-sm">{User.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {User.email}
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={handleLogOut}>Sign out</DropdownItem>
          </Dropdown>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink className="text-white" to="/">
          Home
        </NavLink>
        <NavLink className="text-white" to="/menu">
          Our Menu
        </NavLink>
        <NavLink className="text-white" to="/order/salad">
          Order Food
        </NavLink>
        {!User && (
          <NavLink className="text-white" to="/login">
            Login
          </NavLink>
        )}

        {User && (
          <NavLink className="text-white" to="/dashboard/cart">
            <button className="flex gap-2">
              <IoMdCart className="text-2xl" />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </NavLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
