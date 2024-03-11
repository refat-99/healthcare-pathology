import React from 'react';
import Navber from './SharedPages/Navber';
import Carousel from './SharedPages/Carousel';
import { useLoaderData } from 'react-router-dom';
import Doctors from './Doctor/Doctors';
import Footer from './SharedPages/Footer/Footer';

const Home = () => {
    const doctors = useLoaderData();
    // console.log(data)
    return (
        <>
            <Navber></Navber>
            <Carousel></Carousel>
           <Doctors doctors={doctors}></Doctors>
             <Footer></Footer>
           
        </>
    );
};

export default Home;