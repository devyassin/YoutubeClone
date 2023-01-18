import React from "react";
import { NavLogo } from "../assets";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";

const Navbar = () => {
  return (
    <nav className="flex sticky z-50  bg-SoftBlack rounded-b-lg  top-0 justify-between items-center px-6 py-4">
      {/* Logo */}
      <Link to="/">
        <img className="w-16" src={NavLogo} alt="logo" />
      </Link>
      {/* Search bar */}
      <SearchBar />
    </nav>
  );
};

export default Navbar;
