import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';

const Main = () => {
    return (
        <main className="main-container">
            <Card/>
           
            <Banner/>
            
            <Testimonial />
        </main>
    )
}

export default Main;