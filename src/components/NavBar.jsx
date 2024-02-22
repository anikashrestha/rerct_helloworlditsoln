import React from 'react';
import '../assets/css/NavBar.css';
import logo from '../assets/images/logo_name.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/blog" className="navbar-item">Blog</a>
            <span className="navbar-divider">|</span>
            <a href="/team" className="navbar-item">Team</a>
            <button onClick={() => alert('You clicked the button!')} className="navbar-button">Work with Us</button>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="header">
            <div className="logoname-container">                
                <img src={logo} className="logoname" />                
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
