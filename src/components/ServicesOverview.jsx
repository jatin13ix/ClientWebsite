import React from 'react';
import { FaTools, FaCogs, FaLaptop, FaClipboardCheck } from 'react-icons/fa';

function ServicesOverview() {
    const services = [
        { icon: FaTools, title: 'Electronic Repairs', description: 'We provide expert repair services for all kinds of electronics.' },
        { icon: FaCogs, title: 'Installations', description: 'Professional installation services for your home and office.' },
        { icon: FaLaptop, title: 'Custom Solutions', description: 'Tailored solutions for your specific electronic needs.' },
        { icon: FaClipboardCheck, title: 'Consulting', description: 'Expert advice and consulting services.' },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow">
                            <service.icon className="text-blue-800 text-4xl mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesOverview;
