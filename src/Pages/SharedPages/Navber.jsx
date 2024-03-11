import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/healthcareLogo2.png";
import { authContext } from '../../ProviderAuth/AuthProvider';


const Navber = () => {
    const {user,logOut} = useContext(authContext);
    return (
        <div>
            {/* navber form desy ui */}
            <div className="navbar  bg-neutral text-white">
                 {/* for mobile device */}
            <div className="navbar-start">
                <div className="dropdown  text-orange-600">                  
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300  rounded-box w-52">
                    <li>
                        <Link  to="/">Home</Link>
                    </li>
                    <li>
                        <a>Service</a>
                        <ul className="p-2 text-blue">
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
                <img src={logo} alt='' className='h-9 w-16 pb-2 lg:ml-5 ' /> 
               {/* <Link className="md:hidden ">Healthcare Pathology</Link> */}

                </div>
               
                
            </div>
            {/* large sceen nav */}
            <div className="navbar-center  hidden lg:flex">
            <Link className="lg:mr-20 text-orange-500 ">Healthcare Pathology</Link>
                <ul className="menu menu-horizontal px-1 ">
                <li>
                    <Link to="/"> Home</Link>
                   
                </li>
                <li>
                    <details>
                    <summary>Services</summary>
                    <ul className="p-2 z-10 bg-neutral decoration-zinc-100">
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
            <div className="navbar-end">
               {
                user ?  <Link  onClick={logOut} to=""  className="btn btn-warning btn-sm lg:mr-10">Log Out</Link>:<Link to="/login" className="btn btn-sm btn-warning lg:mr-10">Login</Link>
               }
               
            </div>
            </div>
            {/* test */}

        </div>
    );
};

export default Navber;