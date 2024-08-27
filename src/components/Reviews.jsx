import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        name: 'John Doe',
        rating: 5,
        comment: 'Excellent service! Highly recommended.',
    },
    {
        name: 'Jane Smith',
        rating: 4,
        comment: 'Great experience, but there is room for improvement.',
    },
    {
        name: 'Bob Johnson',
        rating: 5,
        comment: 'Very professional and quick turnaround time.',
    },
];

function Reviews() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow-md">
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((star, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-xl ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="font-semibold mb-2">{review.name}</p>
                            <p className="text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;
