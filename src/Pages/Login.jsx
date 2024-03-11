import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.confic';
import { authContext } from '../ProviderAuth/AuthProvider';
import Footer from './SharedPages/Footer/Footer';

// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth(app);

const Login = () => {
    const {signUpWithGoogle,passwordLogIn}= useContext(authContext)
    const navigate = useNavigate();
    const location = useLocation();
    //  take state locaton from private page location path
    // signin with google 
    const handleGooleLogIn = () =>{
        // call a function for google login
           signUpWithGoogle()
            .then((result)=>{
                const user = result.user;
                console.log(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch((error)=>{
                const massage = error.massage;
                console.log(massage);
            })
        }
    // Log in with email password
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // login call function
        passwordLogIn(email,password)
         .then((result) =>{
            console.log(result.user)
             // navigate after log in
             navigate(location?.state ? location.state : '/')
             // navigate('/')

         })
         .catch((error) =>{
            console.log(error.massage)
         })

        
    }


    return (
        <div className='text-center mt-20'>
            <h1 className='font-bold text-3xl'>Login now </h1>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-neutral">Login</button>
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

            <Footer></Footer>
            
        </div>
    );
};

export default Login;