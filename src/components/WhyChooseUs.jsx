import React from 'react';
import { FaCheckCircle, FaClock, FaSmile } from 'react-icons/fa';

function WhyChooseUs() {
  const points = [
    { icon: FaCheckCircle, title: 'Expert Technicians', description: 'Highly skilled and experienced professionals.' },
    { icon: FaClock, title: 'Quick Turnaround', description: 'Fast and reliable services.' },
    { icon: FaSmile, title: 'Customer Satisfaction', description: 'Guaranteed satisfaction for all our customers.' },
  ];

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {points.map((point, index) => (
            <div key={index} className="w-full md:w-1/3 p-8">
              <point.icon className="text-orange-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
