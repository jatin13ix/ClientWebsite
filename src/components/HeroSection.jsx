import React from 'react';
import '../styles/styles.css';  // Import the CSS file

function HeroSection() {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214e9df14f5f8c6c5b6cde4a712e0d34e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzA1NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzY1NTA3&ixlib=rb-1.2.1&q=80&w=400')" }}>
            <div className="absolute inset-0 bg-blue-800 bg-opacity-75 flex items-center justify-center">
                <div className="container mx-auto text-center text-white relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold fade-in-up">
                        Your One-Stop Solution for All Services
                    </h1>
                    <p className="text-lg md:text-2xl mt-4 fade-in-up" style={{ animationDelay: '0.5s' }}>
                        Expert solutions in electronics and more.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 bounce-in"
                        style={{ animationDelay: '1s' }}
                    >
                        Explore Our Services
                    </a>

                    {/* Image container with floating effect */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 mb-8">
                        <img src="https://images.unsplash.com/photo-1506748686214-e9df14f5f8c6c5b6cde4a712e0d34e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzA1NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzY1NTA3&ixlib=rb-1.2.1&q=80&w=200" alt="Electronic Item 1" className="w-32 h-auto floating-image" />
                        <img src="https://images.unsplash.com/photo-1510693580863-c58c56e6391b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzA1NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzY1NTA4&ixlib=rb-1.2.1&q=80&w=200" alt="Electronic Item 2" className="w-32 h-auto floating-image" />
                        <img src="https://images.unsplash.com/photo-1506748686214-bc5f7e7a15d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNzA1NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjcwNzY1NTA5&ixlib=rb-1.2.1&q=80&w=200" alt="Electronic Item 3" className="w-32 h-auto floating-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
