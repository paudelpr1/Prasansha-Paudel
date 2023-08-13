import React from "react";
import Navbar from "./Navbar";
import "./CSS/NavContainer.css"

function NavContainer({children}){
    return (
        <nav className = "nav-container sticky top-0 z-20">
            <ul className="flex justify-between items-center space-x-7">
            <Navbar text = "Home" href  = "/"/>
            <Navbar text = "About" href  = "/about"/>
            <Navbar text = "Skills" href  = "/skills"/>
            <Navbar text = "Project" href  = "/project"/>
            <Navbar text = "Contact" href  = "/contact"/>
            </ul>
        </nav>
    )
}

export default NavContainer;