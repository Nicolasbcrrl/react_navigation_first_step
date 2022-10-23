import React, { useState,useRef } from 'react';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

function Menu() {
    
    return(
        <BrowserRouter>
            <div className='Title'>
                <h1>Welcome to React Router</h1>
            </div>
            <Link to="/">Home</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
            <Routes>
                <Route exact path="/"element={<Home />} />
                <Route path="/about"element={<About />} />
                <Route path="/contact"element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );

}

export default Menu;