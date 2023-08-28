import React from "react";
import "./CSS/Navbar.css"

function Navbar(props){
    return (
        <nav className = "navbar">
            <div className = "flex justify-between">
            <a href = {props.href}>{props.text}</a>
            </div>
        </nav>
    );
    

}
export default Navbar;