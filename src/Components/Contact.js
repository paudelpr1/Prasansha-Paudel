import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";


function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => {toast.success("Message sent! I'll get back to you soon")})
          .catch((error) => {toast.error("Something went wrong, please try again")});
      }




    return (
        <section id = "contact" className ="bg-gray-100">
            <div className = "text-center container mx-auto py-10 px-20 md:px-20" >
                <div>
                    <h1 className="text-4xl font-semibold text-gray-800 py-2 my-8">
                        Contact Me
                    </h1>
                </div>
                <div className="container mx-auto px-2 sm:px-5  md:px-14 md:py-5 py-5 bg-gray-300 rounded-2xl">
                    <form netlify className="flex flex-col w-full" onSubmit={handleSubmit}>
                        <input type = "text" id = "name" name ="name" placeholder="Name" className="my-4 p-2" onChange={(e) => setName(e.target.value)}/>
                        <input type = "email" id = "email" name ="email" placeholder="Email" className="my-4 p-2" onChange={(e) => setEmail(e.target.value)}/>
                        <textarea  id = "message" name ="message" rows = "10" placeholder="Message" className="my-4 p-2" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <Button type = "submit" variant = "contained" style={{backgroundColor: "#1f2937", padding: "0.75rem", margin: "1rem auto"}}>Let's Collaborate</Button>
                    </form>
                </div>

            </div>

            <div className="py-5"></div>  

        </section>
    )
}

export default Contact;