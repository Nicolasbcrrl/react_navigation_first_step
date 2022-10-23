import React, { useState } from 'react';


function About() {
    const [aboutText, setaboutText] = useState('This is the about page');
    return(
        <div>
            <div className='Texte'>
                {aboutText}
            </div>
        </div>

    );


}

export default About;