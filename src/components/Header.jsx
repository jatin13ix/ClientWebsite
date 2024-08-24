import React from 'react';
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold"> <img  alt='Logo' src={logo} className='h-16  w-auto ml-4'/> </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-orange-500">Home</a></li>
                        <li><a href="#" className="hover:text-orange-500">Services</a></li>
                        <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-500">Portfolio</a></li>
                        <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                    </ul>
                </nav>
                <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Get a Quote</a>
            </div>
        </header>
    );
}

export default Header;
