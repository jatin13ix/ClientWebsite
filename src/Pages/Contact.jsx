import React from "react";
import logoo from "../assets/logooo.png"; // Adjust the path as needed
import logo from '../assets/logo.svg'
const Contact = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info and Logo */}
                    <div className="md:w-1/2 flex flex-col justify-between bg-blue-800 text-white p-6 rounded-lg shadow-md mt-8 md:mt-0">
                        <div className="mb-8 flex items-center justify-center md:justify-start">
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="touch-manipulation h-48 w-fit bg-white ml-2   p-2"
                                //className="h-16 w-auto ml-4 p-2 bg-white rounded-lg"
                               // style={{ maxWidth: '200px' }}
                            />
                        </div>
                        <div className="space-y-4 text-sm">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                                <div>
                                    <h4 className="font-bold">Phone Number</h4>
                                    <p>+91 8435390539
                                        +91 9399818118</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Email Address</h4>
                                    <p>contact@onecall.com</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Office Address</h4>
                                    <p>Koteshwar Road, Gwalior 474003</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Working Hours</h4>
                                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
