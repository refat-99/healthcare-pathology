import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const NotFound404 = () => {
    return (
        <>
         
        <div className='h-screen flex items-center justify-center'>
            
            <img className='h-4/5 w-2/3	' src="https://i.ibb.co/yVxmHm6/error-Page.jpg" alt="error-Page" border="0"/>
           
        </div>
        <div className='flex items-center justify-center z-10 mb-10'>
            <Link to='/' className='flex mt-3 bg-blue-800 pl-5 rounded-lg w-40 h-6 text-white hover:bg-yellow-600 hover:text-blue-600'><FaArrowLeft  className='mt-1' />Back to home</Link>
        </div>

        
        </>
    );
};

export default NotFound404;