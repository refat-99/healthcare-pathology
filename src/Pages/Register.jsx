import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../ProviderAuth/AuthProvider';

const Register = () => {
    const {createUser} = useContext(authContext);


    const handleCreateUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // call create user password
        createUser(email,password)
         .then((result) =>{
            console.log(result.user)
         })
         .catch((error) =>{
            console.log(error.massage)
         })
    }
    
    return (
        <div className='text-center'>
            <h2>Register</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered" required />
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
                        <button type='submit' className="btn btn-primary">Create Account</button>
                    </div>
                </form>
                <p>Already have an Account?<Link to="/login" className='btn btn-sm ml-3 mb-2'>Login</Link></p>
                </div>
            </div>   
        </div>
    );
};

export default Register;