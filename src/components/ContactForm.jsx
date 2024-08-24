import React from 'react';

function ContactForm() {
    return (
        <section className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
                <form className="max-w-xl mx-auto">
                    <div className="mb-4">
                        <input type="text" className="w-full p-4 rounded bg-gray-100 text-gray-900" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="w-full p-4 rounded bg-gray-100 text-gray-900" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input type="tel" className="w-full p-4 rounded bg-gray-100 text-gray-900" placeholder="Phone" />
                    </div>
                    <div className="mb-4">
                        <textarea className="w-full p-4 rounded bg-gray-100 text-gray-900" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
