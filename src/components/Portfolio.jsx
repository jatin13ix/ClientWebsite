import React from 'react';

function Portfolio() {
    const projects = [
        { image: '/path-to-project-1.jpg', title: 'Project 1', description: 'A successful project description.' },
        { image: '/path-to-project-2.jpg', title: 'Project 2', description: 'Another great project.' },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Our Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow">
                            <img src={project.image} alt={project.title} className="w-full rounded mb-4" />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
