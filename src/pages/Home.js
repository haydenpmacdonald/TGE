import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiceSquares from '../components/ServiceSquares'
import Footer from '../components/Footer';


const Home = () => {

    return (
        <div>
            <NavBar />
            <Hero />
       
            <ServiceSquares />
            <Footer />
        </div>
    )
}

export default Home
