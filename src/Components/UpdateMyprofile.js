import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase.init';
import Loading from './Loading';

const UpdateMyprofile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth)
     
    const navigate = useNavigate()
    const imageStorage = 'df511ada4376de198cb83007af0a4153'
    const onSubmit = async data => {
        const image = data?.image[0]

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage}`
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(rs => rs.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const profile = {
                        displayName: data.name,
                        education: data.education,
                        city: data.city,
                        phone: data.phone,
                        linkdin: data.linkdin,
                        email: user?.email,
                         photoURL: img
                    }
                     
                    fetch(`https://guarded-inlet-86447.herokuapp.com/user/${user.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profile)

                    }).then(res => res.json())
                        .then(data => {
                             console.log(data)
                            if (data?.result?.acknowledged===true) {
                                toast.success('Update successfullay')
                                navigate('/dashboard/myprofile')
                                reset()
                            }
                            else {
                                toast.error('Update Failed')
                            }
                        })
                }
            })
        if (loading) {
            return <Loading></Loading>
        }


    }
    return (
        <>
            <h2 className='text-2xl text-center'>Update My Profile</h2>
            <div className='mb-10 flex justify-center '>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required "

                            }
                        })} type="text" placeholder="imran" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>

                        </label>
                        <input {...register("education", {
                            required: {
                                value: true,
                                message: "education is required "

                            }
                        })} type="text" placeholder="BUET" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your City</span>

                        </label>
                        <input {...register("city", {
                            required: {
                                value: true,
                                message: "city is required "

                            }
                        })} type="text" placeholder="Dhaka" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Your Phone Number</span>

                        </label>
                        <input {...register("phone", {
                            required: {
                                value: true,
                                message: "Phone number is required "

                            }
                        })} type="number" placeholder="017...." className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}


                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Link in Profile link</span>

                        </label>
                        <textarea    {...register("linkdin", {
                            required: {
                                value: true,
                                message: "linkdin profile link is required "

                            }
                        })} type="text" placeholder="//http:linkdin.com" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.linkdin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkdin.message}</span>}


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
                            <span className="label-text">Your Photo</span>

                        </label>
                        <input {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required "

                            }
                        })} type="file" placeholder="imran" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}


                        </label>
                    </div>


                    <input className='btn w-full max-w-xs text-white' type="submit" value='Updated profile' />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default UpdateMyprofile;