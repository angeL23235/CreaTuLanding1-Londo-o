import React from "react";
import demon from "../../../public/Demon.svg";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-white shadow px-4 py-3">
            <div className="flex items-center space-x-2">
                <Link to="/">
                    <img src={demon} alt="imagen mascara japonesa" width="60" />
                </Link>
                <h3 className="text-xl font-bold text-black">Demon Store</h3>
            </div>
            <ul className="flex space-x-4 text-black font-semibold">
                <ul className="flex space-x-4 text-black font-semibold">
                    <ul className="flex space-x-4 text-black font-semibold">
                        <li><Link to="/category/ropa">Ropa</Link></li>
                        <li><Link to="/category/figuras">Figuras</Link></li>
                        <li><Link to="/category/katanas">Katanas</Link></li>
                    </ul>

                </ul>
            </ul>
            <div>
                <CardWidget />
            </div>
        </nav>
    );
}

export default Navbar;
