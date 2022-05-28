import React, { useState } from 'react';
 
import {   useNavigate, useParams } from 'react-router-dom';
import useAllProduct from './hooks/useAllProduct';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
 


const Purses = () => {
    const { _id } = useParams()
    const [products] = useAllProduct()
    const [user, error] = useAuthState(auth)
    const [order, setOrder] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
   const navigate=useNavigate()




    const pursesProduct = products.find(product => product._id === _id)
       
    const quantityHandaler = (event) => {
        const order = event.target.value
        setOrder(order)

    }
    const nameHandaler = (event) => {
        const name = event.target.value
        setName(name)

    }
    const phoneHandaler = (event) => {
        const phone = event.target.value
        setPhone(phone)

    }
    const addressHandaler = (event) => {
        const address = event.target.value
        setAddress(address)

    }

    const registerSubmit = (event) => {
        event.preventDefault()
         
            const ordered = {
                orderId: _id,
                productName:pursesProduct?. name,
                customerEmial: user?.email,
                displayName: name,
                phone: phone,
                address: address,
                orderQuantity: order,
                img:pursesProduct?.img,
                price:pursesProduct?.price_per_unit


            }
            if (parseInt(order) >= pursesProduct?.minimum_quantity && parseInt(order)<=pursesProduct?.avilable_quantity)
            {
                
 
             
            
                fetch("http://localhost:5000/order",{
                    method:"POST",
                    headers:{
                    'content-type':'application/json'
                    },
                    body:JSON.stringify(ordered)
        
                })
                .then(res=>res.json())
                .then(data=>{
                     console.log(data)
                    if(data.success===true){
                        toast(`order successfullay  `)
                        navigate(`/payment`)
                    }
                    else{
                        toast.error(`Already have an order on`)
                    }
                     
                })
            }
            else
            {
                toast.error(`please flow minimum quantity and avilable quantity range`)
            }

            
           



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={pursesProduct?.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Name:{pursesProduct?.name}</h2>
                            <p>Price_per_unit : $ {pursesProduct?.price_per_unit}</p>
                            <p>Minimum_Order_quantity : {pursesProduct?.minimum_quantity}</p>
                            <p>Avilable_quantity : {pursesProduct?.avilable_quantity}</p>
                            <p><i className='text-primary text-2xl  font-bold'>Description</i>: {pursesProduct?.description}</p>

                        </div>
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={registerSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" onBlur={nameHandaler} placeholder='your name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} readOnly disabled className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Order Quantity</span>
                                </label>
                                <input type="number" onChange={quantityHandaler}  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" onBlur={phoneHandaler} name='phone ' placeholder="017........" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" onBlur={addressHandaler} name='address' placeholder="Your Address" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"   >Complet purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purses;