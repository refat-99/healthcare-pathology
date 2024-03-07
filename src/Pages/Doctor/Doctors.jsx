import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Doctors = () => {
    const doctors = useLoaderData();
    // console.log(doctors)
   
    return (
           <div>
            <h1 className='font-bold bg-blue-950 text-white  py-12 text-center'>DOCTOR APPOINTMENT</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pt-2 justify-center justify-items-center'>
            {
                doctors.map(doctor =><Card
                key={doctor._id}
                doctor={doctor}
                ></Card>)
            }
           
           </div>
        </div>      
    )
}

export default Doctors;