import React, { useState } from 'react';


function Contact() {
    const [contactText, setContactText] = useState('This is the contact page');

    return(
        <div>
            <div className="Texte">
                {contactText}
            </div>
        </div>

    );
}

export default Contact;