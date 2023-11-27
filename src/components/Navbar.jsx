import React from "react";
import { Input } from "antd";

import { NavLink } from "react-router-dom";
const Navbar = ({ setFilterState }) => {
  return (
    <nav className="flex gap-24 mt-4 mb-4  h-8">
      <img
        src="https://th.bing.com/th?id=OIP.M_uZDOrt2X9MRMFy8sYZ2QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 "
        alt="logo"
      />
      <Input
        placeholder="Search for pet"
        onChange={(event) => {
          setFilterState(() => ({
            value: event.target.value,
            filterType: "name",
          }));
        }}
      />

      <NavLink to="/"> Home</NavLink>
      <NavLink to="/marketplace"> Marketplace</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
