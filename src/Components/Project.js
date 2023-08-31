import LinkIcon from '@mui/icons-material/Link';

function Project() {
    return (
        <section id = "projects" className="bg-slate-200 py-10">
            <div className="text-center container mx-auto px-20 md:px-20">
                <h1 className="text-4xl font-semibold text-gray-800 py-5">
                    My Projects
                </h1>
                
                
                <div className="container mx-auto md:px-5 md:py-5 bg-slate-300 rounded-2xl">
                    <h2 className="text-xl text-gray-800 font-semibold py-2">ULM_PMAC</h2>
                    <div className="mx-auto px-8 md:px-8 py-2 lg:flex gap-14 items-center justify-between">
                        <div className="flex-shrink-0 lg:max-w-md  w-full md:mr-8">
                            <img  src="./ULM_PMAC.png"  alt="ULM_PMAC_Project" className="mx-auto md:mx-0 border-0 rounded-lg shadow-[#7f1d1d] shadow-md hover:scale-110 duration-500" style={{ maxWidth: '100%', width: "1345px", height: "310px"}} />
                        </div>
                        <div>
                            <p className="text-center text-gray-800 font-semibold py-4">
                                Description
                            </p>
                            <p className="text-md text-gray-800 text-justify">
                                Led a team of six developers in crafting a web application for the ULM Pre-medical Advisory Committee, aimed at enhancing the preparation of pre-medical students for the Medical School Application process. This platform facilitates student registration, ensures a frictionless application creation experience, and enables effortless updates throughout the process.
                                Moreover, it empowers committee members to closely monitor student progress, offering essential insights. The application received recognition and adoption by the ULM Pre-medical Advisory Committee, underlining its effectiveness and utility.
                            </p>

                            <div className='py-3'>
                                <a className="text-md text-gray-800 font-semibold text-justify" href='https://www.ulm-pmac.com/'><LinkIcon /> Webpage link</a>

                            </div>
                           
                        </div>
                    </div>
                </div>
                </div>
                <br />
             

                <div className="text-center container mx-auto px-20 md:px-20 ">
                <div className="container mx-auto md:px-5 md:py-5 bg-slate-300 rounded-2xl">
                    <h2 className="text-xl text-gray-800 font-semibold py-2">Visitor Bureau System</h2>
                    <div className="mx-auto px-8 md:px-8 py-2 lg:flex gap-14 items-center justify-between">
                        <div className="flex-shrink-0 lg:max-w-md  w-full md:mr-8">
                            <img src="./VisitorInfo1.png" alt="Visitor_Info_Project" className="mx-auto md:mx-0 border-0 rounded-lg shadow-[#a3a3a3] shadow-md hover:scale-110 duration-500" style={{ maxWidth: '100%' }} />
                        </div>
                        <div>
                            <p className="text-center text-gray-800 font-semibold py-4">
                                Description
                            </p>
                            <p className="text-md text-gray-800 text-justify">
                                Created a comprehensive Visitor Bureau Information System to serve the Monroe-West Monroe region, providing an effective mechanism for monitoring the city's visitor influx. This application facilitates visitors in submitting their details, including group size and purpose of visit to the city.
                                Additionally, users can access real-time data on the current city occupancy, enhancing the overall visitor experience.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="py-5"></div>  
            
        </section>
    );
}

export default Project;




