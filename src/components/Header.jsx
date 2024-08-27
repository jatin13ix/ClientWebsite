import React from 'react';
import logooo from '../assets/logooo.png';
import logo from '../assets/logo.svg'
import Navbar from '../Navbar/Navbar'; // Adjust the path as needed

function Header() {
    return (
        <header className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        alt="Logo"
                        src={logo}
                        className="h-16 w-auto ml-4 p-2 bg-white rounded-lg"
                        style={{ maxWidth: '200px' }} // Ensuring the logo width doesn't exceed a certain limit
                    />
                    <div className="ml-4">
                        <span className="text-2xl font-bold">OneCall</span>
                        <div className="text-sm italic">give us a chance to help</div>
                    </div>
                </div>

                {/* Navigation Section */}
                <Navbar /> {/* Render the Navbar component directly */}

                {/* Call-to-Action Button */}
                <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Get a Quote
                </a>
            </div>
        </header>
    );
}

export default Header;
