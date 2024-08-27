// src/Pages/Home.jsx
import React from 'react';
import HeroSection from "../components/HeroSection.jsx";
import Portfolio from "../components/Portfolio.jsx";
import ReviewForm from "../components/ReviewForm.jsx";
import ServicesOverview from "../components/ServicesOverview.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Reviews from "../components/Reviews.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Portfolio/>
            <ServicesOverview/>
            <Testimonials/>
            <Reviews/>
            <WhyChooseUs/>
            <ReviewForm/>
        </div>
    );
};

export default Home;