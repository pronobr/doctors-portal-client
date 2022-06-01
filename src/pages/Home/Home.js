import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import HomeContact from './HomeContact/HomeContact';
import HomeReview from './HomeReview/HomeReview';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Info></Info>
           <Services></Services>
           <Banner></Banner>
           <MakeAppointment></MakeAppointment>
           <HomeReview></HomeReview>
           <HomeContact></HomeContact>
        </div>
    );
};

export default Home;