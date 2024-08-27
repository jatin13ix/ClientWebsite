import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = ({ reviews = [] }) => {
    const [showAll, setShowAll] = useState(false);

    // Check if reviews is an array and sort it
    const sortedReviews = Array.isArray(reviews) ? [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];
    const visibleReviews = showAll ? sortedReviews : sortedReviews.slice(0, 4);

    return (
        <section className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
                {visibleReviews.length > 0 ? (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {visibleReviews.map((review, index) => (
                            <div key={index} className="bg-white text-black p-4 rounded shadow-md">
                                <div className="flex justify-center mb-2">
                                    {[...Array(5)].map((star, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-2xl ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}
                                            aria-label={`${i < review.rating ? 'Filled' : 'Empty'} star`}
                                        />
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold">{review.name}</h3>
                                <p className="text-sm">{review.comment}</p>
                                <p className="text-xs text-gray-500 mt-2">{new Date(review.date).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews available.</p>
                )}
                {sortedReviews.length > 4 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-8 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        {showAll ? 'Show Less' : 'See All Reviews'}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
