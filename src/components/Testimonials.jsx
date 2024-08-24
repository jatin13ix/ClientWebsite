import React from 'react';

function Testimonials() {
    const testimonials = [
        { name: 'John Doe', review: 'Excellent service! Highly recommended.', rating: 5 },
        { name: 'Jane Smith', review: 'Professional and timely.', rating: 4 },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/3 bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow">
                            <p className="mb-4">"{testimonial.review}"</p>
                            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                            <p>{"⭐".repeat(testimonial.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
