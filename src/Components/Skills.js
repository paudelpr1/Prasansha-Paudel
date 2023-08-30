function Skills(){
    return (
        <section className ="bg-gray-100 w-full">
            <div className="text-center container mx-auto p-10 flex flex-col justify-center w-full h-full">
                <div >
                <h1 className="text-4xl font-semibold text-gray-800 py-2">
                    Skills
                </h1>
                </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center px-10 py-10" >
                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto"src = "./Java.png" alt = "Java"/>
                    <p className="my-4 text-xl text-gray-800">Java</p>
                </div>

                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto"src = "./JavaScript.png" alt = "JavaScript"/>
                    <p className="my-4 text-xl text-gray-800">JavaScript</p>
                </div>

                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto" style={{width: "80px", height: "80px"}} src = "./NodeJS.png" alt = "Node JS"/>
                    <p className="my-4 text-xl text-gray-800">Node JS</p>
                </div>

                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto" src = "./MongoDB.jpg" alt ="Mongo DB"/>
                    <p className="my-4 text-xl text-gray-800">Mongo DB</p>
                </div>

                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto"src = "./Angular.png" alt="Angular"/>
                    <p className="my-4 text-xl text-gray-800">Angular</p>
                </div>

                <div className= "shadow-md shadow-[#d1d5db] hover:scale-110 duration-500">
                    <img className = "w-20 mx-auto" src = "./logo512.png" alt="React"/>
                    <p className="my-4 text-xl text-gray-800">React</p>
                </div>
                
            </div>
            </div>

        </section>
        );
}

export default Skills;