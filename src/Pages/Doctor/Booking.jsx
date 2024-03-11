import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Booking = () => {
    const {id} = useParams()
    const doctors = useLoaderData();
    const detailsCart = doctors.find((doctor) => doctor._id === id);
    const {degrees,doctor_name,details,job,specialist,img_url} = detailsCart;
    // console.log(detailsCart);
    return (
        <>
        {/* desyui hero card */}
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:ml-10">
                <img src={img_url} className="rounded-lg shadow-2xl h-80 w-80 border border-blue-800" />
                <div className='lg:ml-5'>
                <h1 className="text-5xl font-bold">{doctor_name}</h1>
                <p className='mt-2 '>{degrees}</p>
                <p >{specialist}</p>
                <p className=''>{job.level}</p>
                <p className='font-bold text-l'>{job.org}</p>
                <p className="py-6">{details}</p>
                <button className="btn btn-primary"> <Link to="/bookingSubmit">Booking Confirm</Link></button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Booking;