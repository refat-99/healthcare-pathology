import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.confic';
import { authContext } from '../ProviderAuth/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const Login = () => {
    const {gar}= useContext(authContext)
    console.log(gar)
    const handleGooleLogIn = () =>{
        signInWithPopup(auth,googleProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user)
            })
            .catch((error)=>{
                const massage = error.massage;
                console.log(massage);
            })
        
    }
    return (
        <div className='text-center mt-20'>
            <h1 className='font-bold text-3xl'>Login now </h1>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className='text-center pb-4'>New to Healthcare?<Link to="/register" className='btn btn-sm ml-3'>Register</Link></p>
                </div>
            </div> 
            <div className=''>
            <p className=''>---OR---</p> 
            <button onClick={handleGooleLogIn} className='btn btn-neutral mt-4 w-80'>SignUp with Google</button> <br />
            <button className='btn btn-neutral mt-2 mb-8 w-80 '>SignUp with Github</button> 
            </div>
            
        </div>
    );
};

export default Login;