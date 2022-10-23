import React, { useState } from 'react';


function Home() {
    const [homeText, setHomeText] = useState('This is the home page');

    return(
        <div>
            <div className='Texte'>
                {homeText}
            </div>
        </div>

    );

}

export default Home;