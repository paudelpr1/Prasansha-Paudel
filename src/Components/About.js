import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function About(){

    const IconStyles = {
        width: 60,
        height: 60,
        color: '#1f2937'
    }

    return (
    <section id= "about" className="bg-slate-200">
        <div className="text-center container mx-auto p-10">
            <h1 className="text-4xl font-semibold text-gray-800 py-2">
                About Me
            </h1>
            <p className="text-lg px-10 py-10 leading-8 text-gray-800 text-center">
                <p>My name is Prasansha Paudel. I am a senior Computer Science student at the University of Louisiana Monroe, expected to graduate in December 2023, with an unwavering passion for Software Development.</p>
                <br />
                <p>My journey through Computer Science has been a thrilling exploration of new technologies and a deep dive into the world of software development. I thrive on staying updated with the latest trends and turning innovative ideas into practical solutions.</p>
                <br />
                <p>My academic foundation is rooted in core Computer Science principles, including Object-Oriented Programming, Data Structures, Algorithms, and software development methodologies. These fundamentals have provided me with a solid base to tackle complex challenges.</p>
                <br />
                <p>I've had the privilege of gaining hands-on experience as a Software Developer Intern at DXC Technology. This opportunity has further honed my technical skills, allowed me to work collaboratively in a dynamic environment, and exposed me to real-world software development challenges.</p>
                <br />
                <p>Beyond technical skills, I am passionate about building relationships and collaborating with diverse teams. Whether it's team projects, work collaborations, or even planning travel adventures, I thrive on making meaningful connections.</p>
                <br />
                <p>As I take steps toward my future in software development, I'm excited to learn more, explore new opportunities, and contribute to this ever-evolving field.</p>
            </p>
            <div  className= "text-xl flex justify-center gap-16">
            <a href = "https://www.linkedin.com/in/prasansha-paudel/"> <LinkedInIcon style={IconStyles}  /></a>
                
            <a href = "https://github.com/paudelpr1"> <GitHubIcon style={IconStyles} /> </a> 
            </div>
        </div>
        <div className="py-5"></div>  
    </section>
    );
}

export default About;