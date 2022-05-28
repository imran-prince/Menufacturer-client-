import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProducts = ({ products }) => {
    const navigate=useNavigate()
    const {_id, name, img,description,price_per_unit,minimum_quantity,avilable_quantity } = products
    const handelPurses=()=>{
        navigate( `/purses/${_id}`)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src= {img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>Price_per_unit $ <span className='text-3xl font-bold text-secondary'>{price_per_unit}</span></p>
                    <p>Minimum_Order_quantity : {minimum_quantity}</p>
                    <p>Avilable_quantity : {avilable_quantity}</p>
                    <p><i className='text-red-300'>Description </i>: {description}</p>
                    <div className="card-actions">
                        <button  onClick={handelPurses} className="btn btn-primary"><span className='font-bold text-white text-2xl'>Purses</span></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProducts;