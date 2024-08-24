import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <ul className="flex justify-center space-x-6">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Portfolio</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-4">
                    <a href="#" className="text-white hover:text-orange-500">Facebook</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-white hover:text-orange-500">Twitter</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-white hover:text-orange-500">LinkedIn</a>
                </div>
                <div>
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                    <p><a href="#" className="hover:text-white">Terms of Service</a> | <a href="#" className="hover:text-white">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
