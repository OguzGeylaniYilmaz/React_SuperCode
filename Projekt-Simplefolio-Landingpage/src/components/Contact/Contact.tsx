import React from "react";
import './Contact.css';
import ContactButton from "../Contact-Button/Contact-Button";



const Contact:React.FC  = () => {
    return ( 
        <div className="contact">
            <h2>Contact</h2>
            <ContactButton></ContactButton>
        </div>
     );
}
 
export default Contact;