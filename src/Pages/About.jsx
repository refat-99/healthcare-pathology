import Navber from './SharedPages/Navber';
import { HiOutlineMail } from "react-icons/hi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";

const About = () => {
    return (
        <>
        <div className='lg:flex mt-20 lg:mt-40 mb-20'>
            <div className=' mr-1 pl-2 lg:ml-5 md:ml-5 lg:pl-20'>
                    <div>
                        <p className='text-xl font-bold mb-4'>About Us</p>
                        <p>
                        Healthcare pathology started its journey in June 2018 and within few days due to its accuracy of the reports and quality of the service,Healthcare became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.
                        </p>
                    </div>
                    <div>
                        <p className='text-xl font-bold mb-4'>Service</p>
                        <p>* Doctor Conseltency</p>
                        <p>* Pathologycal Test</p>
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
                <div>
                <img src="https://i.ibb.co/rt9W25P/medical-building.jpg" alt="medical-building"/>
                </div>
        </div>
        </>
    );
};

export default About;