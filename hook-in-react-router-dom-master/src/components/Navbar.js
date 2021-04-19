import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  );
};
export default Navbar;
