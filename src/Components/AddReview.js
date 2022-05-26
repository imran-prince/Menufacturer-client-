import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase.init';

const AddReview = () => {
    const[user]=useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate=useNavigate()
    const[rating,setRating]=useState('')
    const ratingHandaler=(event)=>{
        setRating(event.target.value)

    }
    const onSubmit = async data => {
        
         
            const review = {
                 
                productName:data.productname,
                customerEmial: user?.email,
               customerName: data.name,
                rating: rating,
               description:data.description
                


            }
            if(rating>0 & rating<=5)
            {
                fetch("http://localhost:5000/review",{
                    method:"POST",
                    headers:{
                    'content-type':'application/json'
                    },
                    body:JSON.stringify(review)
        
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.success){
                        toast.success(`review is  successfully`)
                        navigate('/')
                    }

                    else{
                        toast.error('not success')
                    }
            
                })

            }
            else{
                toast.error('rating only 1-5 ')
            }
                
 
             
            
              
         
            
           



    }
    return (
        <div className='mb-10'>
            <h2 className='text-2xl'>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input {...register("productname", {
                        required: {
                            value: true,
                            message: "Name is required "

                        }
                    })} type="text" placeholder="imran" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.productname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productname.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Customer Name</span>

                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Customer Name is required "

                        }
                    })} type="text" placeholder="imran" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>

                    </label>
                    <input onChange={ratingHandaler}  type="number" placeholder="1-5" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email Address</span>

                    </label>
                    <input readOnly disabled  {...register("email", {

                    })} type="email" value={user?.email} className="input input-bordered w-full max-w-xs" />

                </div>
                 
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <textarea    {...register("description", {
                        required: {
                            value: true,
                            message: "Description is required "

                        }
                    })} type="text" placeholder="product is good" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}


                    </label>
                </div>
                

                 
 


                <input className='btn w-full max-w-xs text-white' type="submit" value='Review' />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReview;