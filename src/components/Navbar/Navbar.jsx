import React from "react";
import '../css/Navbar.css'
import demon from "../../../public/Demon.svg";
import CardWidget from "../CardWidget/CardWidget";
function Navbar(){ 
    return(
       <nav className="navbarItems">
        <div style={{Color:"black"}}>
            <h3>Demon Store </h3>
            <img src={demon} alt="imagen mascara japonesa" width={"60px"} style={{color:"white"}}/>
        </div>
        <ul>
            <li>Ropa</li>
            <li>Figuras</li>
            <li>Katanas</li>
        </ul>
        <div className="car">
            <CardWidget/>
        </div>
       </nav>
    )
}
export default Navbar;