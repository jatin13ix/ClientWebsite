import React from 'react';

function FeaturedServices() {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Featured Services</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Replace these divs with a carousel component if desired */}
                    <div className="w-full md:w-1/3 bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow">
                        <img src="/path-to-featured-service.jpg" alt="Service 1" className="w-full rounded mb-4" />
                        <h3 className="text-xl font-bold mb-2">Service 1</h3>
                        <p>Detailed description of service 1.</p>
                        <a href="#" className="text-orange-500 mt-4 inline-block">Learn More</a>
                    </div>
                    <div className="w-full md:w-1/3 bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow">
                        <img src="/path-to-featured-service.jpg" alt="Service 2" className="w-full rounded mb-4" />
                        <h3 className="text-xl font-bold mb-2">Service 2</h3>
                        <p>Detailed description of service 2.</p>
                        <a href="#" className="text-orange-500 mt-4 inline-block">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedServices;
