import React from 'react'
import './NavbarStyle.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>
                <h1>Profile</h1>
            </Link>
            <ul className='navMenu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Project'>Project</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;