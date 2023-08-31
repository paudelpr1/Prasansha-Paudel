import React, {useState} from "react";
import "./CSS/NavContainer.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function NavContainer(){

    const[isOpen, setIsOpen] = useState(false);

    const openNavbar = () => {
        setIsOpen(true);
      };
    
      const closeNavbar = () => {
        setIsOpen(false);
      };
    
      const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"  });
          closeNavbar(); // Close the mobile menu after clicking a link
        }
      };
    
    return (
        <header className="flex items-center justify-between px-5 py-5 bg-gray-800 text-white sticky top-0 flex-wrap z-[20] mx-auto w-full">
            <a href = "/" className=" text-2xl">Prasansha Paudel</a>

            <nav className=" flex w-1/3 justify-end">
                <div className="hidden w-full md:flex justify-between">
                <ul className="hidden w-full md:flex justify-between">
                    <li>
                        <a href = "/" onClick={() => smoothScroll("home")}>Home</a>
                    </li>
                    <li>
                        <a href = "/#about" onClick={() => smoothScroll("about")}>About</a>
                    </li>
                    <li>
                        <a  href = "/#skills" onClick={() => smoothScroll("skills")}>Skills</a>
                    </li>
                    <li>
                        <a href = "/#projects" onClick={() => smoothScroll("projects")}>Projects</a>
                    </li>
                    <li>
                        <a  href = "/#contact" onClick={() => smoothScroll("contact")}>Contact</a>
                    </li>
                </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={isOpen ? closeNavbar : openNavbar}>
                        {isOpen ? <CloseIcon />: <MenuIcon />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="flex basis-full flex-col items-center text-center duration-500">
                   <ul>
                    <li>
                        <a href = "/" onClick={() => smoothScroll("home")}>Home</a>
                    </li>
                    <li>
                        <a href = "/#about" onClick={() => smoothScroll("about")}>About</a>
                    </li>
                    <li>
                        <a href = "/#skills" onClick={() => smoothScroll("skills")}>Skills</a>
                    </li>
                    <li>
                        <a href = "/#projects" onClick={() => smoothScroll("projects")}>Projects</a>
                    </li>
                    <li>
                        <a href = "/#contact" onClick={() => smoothScroll("contact")}>Contact</a>
                    </li>
                    </ul>
                </div>
            )

            }
        </header>
    )
}

export default NavContainer;