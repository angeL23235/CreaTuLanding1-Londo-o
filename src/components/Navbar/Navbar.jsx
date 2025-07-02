import React from "react";
import demon from "../../../public/Demon.svg";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav
      className="flex items-center justify-between bg-linear-to-bl from-violet-500 
        to-fuchsia-500 drop-shadow-xl/40 px-4 py-3 text-white"
    >
      <div className="flex items-center space-x-2  text-white">
        <Link to="/">
          <img src={demon} alt="imagen mascara japonesa" width="60" />
        </Link>
        <h3 className="text-xl font-bold">Demon Store</h3>
      </div>
      <ul className="flex space-x-4  text-white font-semibold">
        <li>
          <Link to="/category/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/category/figuras">Figuras</Link>
        </li>
        <li>
          <Link to="/category/katanas">Katanas</Link>
        </li>
      </ul>
      <div>
        <CardWidget />
      </div>
    </nav>
  );
}

export default Navbar;
