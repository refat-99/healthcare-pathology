import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/healthcareLogo2.png";
import { authContext } from '../../ProviderAuth/AuthProvider';
import { FaUser } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";


const Navber = () => {
    const {user,logOut} = useContext(authContext);
    return (
        <div className=''>
            {/* navber form desy ui */}
            <div className="navbar  bg-neutral text-white fixed w-full top-0 left-0 z-50">
                 {/* for mobile device */}
            <div className="navbar-start">
                <div className="dropdown  text-orange-600">                  
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-neutral font-bold text-white w-52">
                    <li>
                        <Link  to="/">Home</Link>
                    </li>
                    <li>
                        <a>Service</a>
                        <ul className="">
                            <li><Link to="/doctors">Dr Conseltency</Link></li>
                            <li><Link to="/labtest">Lab Tests</Link></li>                   
                        </ul>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                </div>
                <div className='lg:ml-40'>
                <img src={logo} alt='' className='h-10 w-16 pb-2 ' /> 
               {/* <Link className="md:hidden ">Healthcare Pathology</Link> */}

                </div>
               
                
            </div>
            {/* large sceen nav */}
            <div className="navbar-center  hidden lg:flex">
            <Link className="lg:mr-10 text-orange-500 font-bold ">Healthcare Pathology</Link>
                <ul className="menu menu-horizontal px-1 lg:mr-10">
                <li>
                    <Link to="/"> Home</Link>
                   
                </li>
                <li>
                    <details>
                    <summary>Services</summary>
                    <ul className="p-2 z-10 bg-neutral  decoration-zinc-300">
                        <li> 
                          <Link to="/doctors">Dr Conseltency</Link>
                        </li>
                        <li>
                            <Link to="/labtest">Lab Tests</Link>
                        </li>
                    </ul>
                    </details>
                </li>
                <li> 
                    <Link to="/about">About</Link>
                </li>
                <li> 
                   <Link to="/about">Cantact</Link>
                </li>
                </ul>
            </div>
            <div className="navbar-end lg:mr-2">
               {
                user ? <div className='flex'>
                    <p className='text-xl mt-1'><AiOutlineSafety  /></p>
                    <span className='ml-1 mt-1 font-extralight'>{user.displayName}</span>
                    <Link  onClick={logOut} className="btn btn-warning btn-sm lg:mr-10 ml-3">Log Out</Link>
                    </div>:<Link to="/login" className="btn btn-sm btn-warning lg:mr-10">Login</Link>
               }
               
            </div>
            </div>
            {/* test */}

        </div>
    );
};

export default Navber;