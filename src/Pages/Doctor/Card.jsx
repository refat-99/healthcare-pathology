import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({doctor}) => {
    const {degrees,doctor_name,image_url,details,_id}= doctor;
    return (
        <div>
             <div className="">
                <div className="card h-94 w-72  shadow-xl mb-2 bg-slate-300 hover:bg-blue-950 hover:text-slate-300 ">
                    <figure><img className='w-44 h-44 rounded-2xl pt-2 ' src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="card-title">{doctor_name}</p>
                        <small className="text-violent-700 ">{degrees.slice(0,35)}</small>
                        {
                            details.length> 10 ? <p>{details.slice(0,70)} 
                            <Link to={`/booking/${_id}`} className='font-bold text-yellow-700'>
                                .. read more</Link></p>:<p>{details}</p>
                        }
                    
                    <button className='delay-100 btn hover:btn-primary'>
                    <Link to={`/booking/${_id}`} >Appiontment Booking</Link>
                    </button>
                    </div>
                    
                </div>
               
            </div> 
        </div>
    );
};

export default Card;