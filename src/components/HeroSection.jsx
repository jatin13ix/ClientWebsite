import React from 'react';

import '../styles/styles.css';  // Import the CSS file
function HeroSection() {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://logicalmediagroup.com/nitropack_static/yWoSvgUBTkdYuNkDBNtPizjmdYqZNQFz/assets/images/optimized/rev-ace9be4/logicalmediagroup.com/wp-content/uploads/Should-You-Use-ChatGPT-for-Marketing-Specifically-for-SEO-and-Content-Header-Image-900x604.png')" }}>
            <div className="absolute inset-0 bg-blue-950 bg-opacity-75 flex items-center justify-center">
                <div className="container mx-auto text-center text-white relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold fade-in-up">
                        Your One-Stop Solution for All Services
                    </h1>
                    <p className="text-lg md:text-2xl mt-4 fade-in-up" style={{ animationDelay: '0.9s' }}>
                        Expert solutions in electronics and more.
                    </p>
                    <a
                        href="#"
                        className="mt-16 inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 bounce-in"
                        style={{ animationDelay: '3s' }}
                    >
                        Explore Our Services
                    </a>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;
