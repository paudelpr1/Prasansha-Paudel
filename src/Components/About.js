import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey } from '@mui/material/colors';

function About(){

    const IconStyles = {
        width: 60,
        height: 60,
        color: '#1f2937'
    }

    return (
    <section className="bg-slate-300">
        <div className="text-center container mx-auto p-10">
            <h1 className="text-4xl font-semibold text-gray-800 py-2">
                About Me
            </h1>
            <p className="text-xl px-10 py-10 leading-8 text-gray-800 text-center">
                My name is Prasansha Paudel. I am an international undergraduate student at the 
                University of Louisiana Monroe majoring in Computer Science. Currently, I am a 
                Software Developer Intern at DXC Technology. I am exploring around with different technologies
                and learning about them.
            </p>
            <div  className= "text-xl flex justify-center gap-16">
            <a href = "https://www.linkedin.com/in/prasansha-paudel-59b572190/"> <LinkedInIcon style={IconStyles}  /></a>
                
            <a href = "https://github.com/paudelpr1"> <GitHubIcon style={IconStyles} /> </a> 
            </div>
        </div>

    </section>
    );
}

export default About;