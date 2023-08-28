import React, { useState, useEffect } from "react";
import './CSS/Home.css';
import Button from '@mui/material/Button';


function Home(){
    const texts = ['Software Developer', 'Web Developer']; 
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((currentTextIndex) => (currentTextIndex + 1 ) % texts.length);
    }, 10000); 

    return() => clearInterval(interval);
    }, [texts.length]);

    const OpenResume = () =>{
        window.open('Resume2023.pdf')
    }

    return (
        <section className="bg-gray-100">
          <div className="container mx-auto px-10 py-3 flex justify-between items-center">
            <div className="">
              <h1 className="text-4xl font-semibold text-gray-800">
                Hi, I'm Prasansha. 
              </h1>
              <div className="sliding-text-container">
                <div className="sliding-text text-2xl font-semibold text-gray-800">
                    <span>{texts[currentTextIndex]}</span>
                </div>
              </div>
              <div className=" py-3">
                <Button  variant = "contained" style={{backgroundColor: "black", padding: "0.75rem"}} onClick= {OpenResume}>View Resume</Button>
              </div>
            </div>
      
            <div className="flex-shrink-0 lg:max-w-lg lg:w-full md:w-1/2 w-3/6" >
              <img
                className=" object-cover object-center rounded-full"
                src="./ProfileAvatar.jpg"
                alt="Profile Avatar"
              />
            </div>
          </div>
        </section>
      );
      

}

export default Home;