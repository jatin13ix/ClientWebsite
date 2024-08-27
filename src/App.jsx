import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/HeroSection.jsx';
import Services from './components/ServicesOverview.jsx';
import Testimonials from './components/Testimonials';
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection.jsx";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./Pages/About.jsx";
import serves from "./Pages/Serves.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
    const [reviews, setReviews] = useState([
        { name: 'John Doe', rating: 5, comment: 'Excellent service! Highly recommended.', date: '2024-08-24T14:48:00' },
        { name: 'Jane Smith', rating: 4, comment: 'Great experience, but there is room for improvement.', date: '2024-08-23T10:30:00' },
        { name: 'Jatin Agrawal', rating: 5, comment: 'Excellent Service', date: '2024-08-22T09:15:00' },
        { name: 'Jatin', rating: 3, comment: 'asfjdb', date: '2024-08-22T09:10:00' },
        { name: 'adfsjol', rating: 4, comment: 'dafbj', date: '2024-08-21T08:30:00' },
        { name: 'daaac', rating: 2, comment: 'adfsdsafafd', date: '2024-08-20T07:20:00' },
        // Add more initial reviews here...
    ]);

    const addReview = (review) => {
        setReviews([review, ...reviews]); // Add new review to the top of the list
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                    {/* Add more routes as needed */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
