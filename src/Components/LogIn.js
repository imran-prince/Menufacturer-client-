import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../firebase.init';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
 import Loading from './Loading'
const LogIn = () => {
    const navigate = useNavigate();
  const location = useLocation();
   
  let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signError;
    if(gError||error)
    {
        signError=<p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if(loading||gLoading)
    {
        return  <Loading></Loading>
    }
    if(user||gUser)
    {
           navigate(from, { replace: true });

    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email,data.password)    
    }
    
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email Address</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required "

                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                                    message: 'provide a valid email'
                                }
                            })} type="email" placeholder="imran@gmail.com" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>

                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required "

                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be sixcharacter or longer'
                                }
                            })} type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signError}
                        <input className=' btn w-full max-w-xs text-white' type="submit" value='login' />
                    </form>
                    <p><span>New Princees parts ? <Link to='/registration' className='text-primary  '>Create new Account</Link></span></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline   " onClick={()=>signInWithGoogle()}> <FcGoogle className='text-3xl mr-2'></FcGoogle> Continue with Google</button>


                </div>
            </div>
        </div>
    );
};

export default LogIn;