import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import FeaturedServices from './components/FeaturedServices';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans text-gray-900">
            <Header />
            <HeroSection />
            <ServicesOverview />
            <FeaturedServices />
            <WhyChooseUs />
            <Testimonials />
            <Portfolio />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
