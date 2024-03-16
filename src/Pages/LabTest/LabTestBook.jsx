import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const LabTestBook = () => {
    const {id} = useParams()
    const tests = useLoaderData();
    const detailsTest = tests.find((test) => test.id === id);
    const {test_name,room,charge} = detailsTest;
    return (
        <div className='h-screen flex items-center justify-center m-auto '>
            <div className="card w-52 h-52 bg-base-100 shadow-xl border border-blue-800 hover:bg-blue-800 hover:text-slate-300">
                <div className="card-body items-center text-center pb-5">
                    <p>{test_name}</p>
                    <p>${charge}tk</p>
                    <p>room:{room}</p>
                    <div className="card-actions">
                    <button className="btn btn-xs btn-primary delay-100 hover:btn-error"><Link to='/bookingSubmit'>Booking Confirm</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabTestBook;