import React from 'react';
import img from "../../assets/thamsUp.jpg"
import { Link } from 'react-router-dom';

const BookingSubmit = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-red-200'>
            <div>
            <img src={img} alt='thamsUp-photo' className='w-52 h-52 rounded' /> 
            <div className='text-center'>
             <h1 className='font-bold text-l text-blue-700'> Your Booking is Complete</h1>   
             <Link className='btn  btn-md btn-primary hover:btn-warning mt-2' to="/">back to Home</Link>            
            </div> 
            </div>       
        </div>
    );
};

export default BookingSubmit;