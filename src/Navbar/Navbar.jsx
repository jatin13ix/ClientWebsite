import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex space-x-4">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <Link to="/about" className="hover:text-orange-500">About</Link>
            <Link to="/services" className="hover:text-orange-500">Services</Link>
            <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </nav>
    );
};

export default Navbar;
