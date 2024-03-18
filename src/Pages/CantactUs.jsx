import React from 'react';
import Navber from './SharedPages/Navber';
import { HiOutlineMail } from "react-icons/hi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import Footer from './SharedPages/Footer/Footer';

const CantactUs = () => {
    return (
        <>
        <Navber></Navber>
        <div className='mt-20 lg:mt-40 mb-20'>
            
            <p className='text-3xl mx-2'>Cantact <span className='text-blue-700'>Us</span></p>
            <div className='lg:flex   mt-10'>
                <div className='form lg:w-1/2 mx-2'>
                    <div className='lg:flex '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" name='text' placeholder="Your Name" className="input input-bordered" required />                          
                        </div>
                        <div className='form-control lg:ml-2'>                      
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="text" name='text' placeholder="Your G-mail" className="input input-bordered lg:w-72" required />
                        </div>
                    </div>
                   
                    <div className='mt-3'>
                        <textarea placeholder="Write Masssage" className="textarea textarea-bordered lg:textarea-lg w-full lg:h-80 max-w-lg" ></textarea>
                    </div>
                        <button className='w-52 h-10 bg-slate-700 rounded-lg text-yellow-600 font-bold mt-4 hover:text-white hover:bg-yellow-800'>Send</button>
                </div>
                <div className=' mr-1 pl-2 lg:ml-5 md:ml-5 lg:pl-20'>
                    <div>
                        <p className='text-xl font-bold mb-4'>Get in Touch</p>
                        <p>
                        Healthcare pathology started its journey in June 2018 and within few days due to its accuracy of the reports and quality of the service,Healthcare became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.
                        </p>
                    </div>
                    <div className='mt-3'>
                        <p className='text-xl mb-2'>The Office</p>
                        <p className='mt-3'>
                            <span className='font-bold mr-1 flex'><FaLocationDot className='mt-1 mr-2'/>Address:</span>
                             Healthcare Pathology
                            HOUSE # 16, ROAD # 2, Hatibandha,Medical Mor.
                        </p>
                         <p className='mt-3'>
                            <span className='font-bold flex'>
                                <FaSquarePhone className='mt-1 mr-2' />
                                Phone:
                            </span>
                            +8801773886142
                        </p>
                         <p className='mt-3'>
                            <span className='font-bold flex'>
                                <span><HiOutlineMail className='mt-1 mr-2' />
                                </span>
                                Email:
                            </span> 
                            healthcarepathology2022@gmail.com
                        </p>
                         <div className='mt-3'>
                            <p className='font-bold mt-3 flex'>Business Hours</p>
                            <p><BsFillStopwatchFill className='mt-1 mr-2' /> 8 AM - 9 PM (Everyday)</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default CantactUs;