import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({doctor}) => {
    return (
        <div>
             <div className="">
                <div className="card h-94 w-72  shadow-xl mb-2 bg-slate-300">
                    <figure><img className='w-44 h-44 rounded-2xl pt-2' src={doctor.image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="card-title">{doctor.doctor_name}</p>
                        <small className="font-bold text-violent-700">{doctor.degrees.slice(0,35)}</small>
                    <p>{doctor.details.slice(0,70)} <Link className='font-bold text-violet-950'>..  read more</Link></p>
                    <button className='btn'>Appiontment Book</button>
                    </div>
                    
                </div>
               
            </div> 
        </div>
    );
};

export default Card;