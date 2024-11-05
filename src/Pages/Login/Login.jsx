import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleOnSubmit=(event)=>{
        event.preventDefault();

    }
    return (
        <div className='bg-base-200'>
            <Helmet>
                <title>Gadget Heaven | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet> 
           <div>
                <div className="bg-[#9538E2]     flex justify-center items-center content-center py-10  text-white  ">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-4xl leading-[72px]  font-bold">
                                Login Page 
                                 </h1>                            
                            
                        </div>
                    </div>
                </div>
           </div>

            <div className="  md:w-2/6 mx-auto py-10 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                        <form onSubmit={handleOnSubmit} className="card-body">
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
                                <button className="btn bg-base-200  hover:text-white   hover:bg-[#9538E2]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;