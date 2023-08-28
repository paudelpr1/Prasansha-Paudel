import React, {useState} from "react";
import Navbar from "./Navbar";
import "./CSS/NavContainer.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function NavContainer(){

    const[isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <header className="flex items-center justify-between px-5 py-5 bg-black text-white sticky top-0 flex-wrap z-[20] mx-auto w-full">
            <a href = "/" className=" text-2xl">Prasansha Paudel</a>

            <nav className=" flex w-1/3 justify-end">
                <div className="hidden w-full md:flex justify-between">
                <ul className="hidden w-full md:flex justify-between">
                    <li>
                        <a href = "/">Home</a>
                    </li>
                    <li>
                        <a href = "/#about">About</a>
                    </li>
                    <li>
                        <a href = "/#skills">Skills</a>
                    </li>
                    <li>
                        <a href = "/#projects">Projects</a>
                    </li>
                    <li>
                        <a href = "/#contact">Contact</a>
                    </li>
                </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <CloseIcon />: <MenuIcon />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="flex basis-full flex-col items-center text-center duration-500">
                   <ul>
                    <li>
                        <a href = "/">Home</a>
                    </li>
                    <li>
                        <a href = "/#about">About</a>
                    </li>
                    <li>
                        <a href = "/#skills">Skills</a>
                    </li>
                    <li>
                        <a href = "/#projects">Projects</a>
                    </li>
                    <li>
                        <a href = "/#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            )

            }
        </header>
    )
}

export default NavContainer;