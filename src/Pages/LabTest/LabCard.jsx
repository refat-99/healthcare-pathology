import React from 'react';
import { Link } from 'react-router-dom';

const LabCard = ({test}) => {
    const {test_name,charge,id} = test;
    return (
        <div className='m-4'>
            <div className="card w-52 h-44 bg-base-100 shadow-xl border border-blue-800 hover:bg-blue-800 hover:text-slate-300">
                <div className="card-body items-center text-center">
                    <p>{test_name}</p>
                    <p>${charge}tk</p>
                    <div className="card-actions">
                    <button className="btn btn-xs delay-100 hover:btn-warning"><Link to={`/labtestbook/${id}`} >Booking</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabCard;