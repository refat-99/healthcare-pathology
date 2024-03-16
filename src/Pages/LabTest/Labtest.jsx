import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LabCard from './LabCard';
import Navber from '../SharedPages/Navber';
import Footer from '../SharedPages/Footer/Footer';

const Labtest = () => {
    const tests = useLoaderData();
    // console.log(tests);
    return (
            <div>
                <Navber></Navber>
                <p className='text-2xl font-bold text-red-50 text-center bg-blue-900 pb-1 mt-20 rounded-lg'>Lab Test Service</p>
                <div className=' container mt-2 px-3 mx-0 min-w-full flex flex-col items-center'>
                    <label className="input input-bordered flex h-10 w-80">
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <button className='btn btn-outline btn-sm btn-primary mt-1'>search</button>  
                </div>
                
                <div className='grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-5 content-center justify-center'>
                    {
                        tests.map(test => <LabCard
                        key={test.id}
                        test={test}
                        ></LabCard>
                    )}
                </div>
                <Footer></Footer>
            </div>
    );
};

export default Labtest;