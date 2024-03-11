import React from 'react';
import img from "../../assets/thamsUp.jpg"
import { Link } from 'react-router-dom';

const BookingSubmit = () => {
    return (
        <div className=''>
                      
            <div className='flex align-center justify-center border mt-5'>
                <img src={img} alt='thamsUp-photo' className='w-1/3 border-red-950' />
                
            </div> 
            <div className='border text-center'>
             <h1 className='font-bold text-3xl z-index-1'> Your Booking is Complete</h1>   
             <Link className='btn  btn-green mt-2' to="/">back to Home</Link>            
            </div>        
        </div>
    );
};

export default BookingSubmit;