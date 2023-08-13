import React from "react";
import "./CSS/Navbar.css"

function Navbar(props){
    return (
        <div className = "navbar">
        <a href = {props.href}>{props.text}</a>
        </div>
    );
    

}
export default Navbar;