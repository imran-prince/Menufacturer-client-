import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase.init';
import Loading from './Loading';

const AddProduct = () => {
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
                    const product = {
                        name: data.name,
                        minimum_quantity: data.minquantity,
                        avilable_quantity: data.abilablequantity,
                        price_per_unit: data.price,
                        description: data.description,
                        email: user?.email,
                        img: img







                    }
                    fetch('https://guarded-inlet-86447.herokuapp.com/addproduct', {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(rs =>rs.json())
                         
                        .then(newproduct => {
                       

                            if (newproduct.insertedId) {
                                toast.success('newproduct Added successfullay')
                                navigate('/')
                                reset()
                            }
                            else {
                                toast.error('newproduct Added Failed')
                            }
                        })
                }
            })
        if (loading) {
            return <Loading></Loading>
        }


    }

    return (
        <div className='mb-10'>
            <h2 className='text-2xl'>Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                        <span className="label-text">Minimum Quantity</span>

                    </label>
                    <input {...register("minquantity", {
                        required: {
                            value: true,
                            message: "Min Quantity is required "

                        }
                    })} type="number" placeholder="10" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Aviliable Quantity</span>

                    </label>
                    <input {...register("abilablequantity", {
                        required: {
                            value: true,
                            message: "Aviliable Quantity is required "

                        }
                    })} type="number" placeholder="100" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.abilablequantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.abilablequantity.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input {...register("price", {
                        required: {
                            value: true,
                            message: "Price is required "

                        }
                    })} type="number" placeholder="500" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}


                    </label>
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


                <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;