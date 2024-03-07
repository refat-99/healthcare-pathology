import React from 'react';
import Navber from './SharedPages/Navber';
import Carousel from './SharedPages/Carousel';
import { useLoaderData } from 'react-router-dom';
import Doctors from './Doctor/Doctors';

const Home = () => {
    const doctors = useLoaderData();
    // console.log(data)
    return (
        <>
            <Navber></Navber>
            <div className=''>
            <Carousel doctors></Carousel>
            </div>
           <Doctors doctors={doctors}></Doctors>
            {/* <h1 className='card-title text-blue-600 py-12 text-center'>DOCTOR APPOINTMENT</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
               
            {
                doctors.map((doctor)=><Doctors
                key={doctor._id}
                doctor={doctor}
                ></Doctors>)
            }  
            </div>
             */}
           
        </>
    );
};

export default Home;