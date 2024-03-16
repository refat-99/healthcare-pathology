import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../ProviderAuth/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navber from './SharedPages/Navber';


const Register = () => {
    const {auth,createUser,logOut} = useContext(authContext);
    const [error, setError] = useState(null)

    const navigate = useNavigate();


    const handleCreateUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = String(form.name.value);
        const password = form.password.value;


         // validation
         const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*$/;
         if (email===validRegex){  
             setError("Email can't be blank");  
             return;  
           }else if(password.length<6){  
             setError("Password must be at least 6 characters !");  
             return;  
             }if(name.length<4){
                setError('set your name at least 4 character !')
                return;
                
             }
        
        // call create user password
        createUser(email,password)
         .then((result) =>{
           
            // user name set functon
            updateProfile(auth.currentUser, {
                displayName:name,
              }).then(() => {
                // Profile updated!
                alert("Your Register Is Done")
                logOut()
               navigate('/login')
               
               
                
              }).catch((error) => {
                // An error occurred
                setError('Fill the name field')
              });
         })
         .catch((error) =>{
            setError(error.massage)
         })
    }
    
    return (
        <>
        <Navber/>
        <div className='text-center mt-20'>
            <div class="flex justify-center items-center">
                <img src="/vite.svg" alt="Your Image" className='h-16 w-16'/>    
            </div>
            <h2 className='text-3xl'>Register</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleCreateUser} className="card-body">
                    <p className='text-red-800'>{error}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password"  className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-neutral">Create Account</button>
                    </div>
                </form>
                <p>Already have an Account?<Link to="/login" className='btn btn-sm ml-3 mb-2'>Login</Link></p>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Register;