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
                    <h2 className="card-title"> {name}</h2>
                    <p><small>price_per_unit{price_per_unit}</small></p>
                    <p><small>Minimum_Order_quantity{minimum_quantity}</small></p>
                    <p><small>avilable_quantity{avilable_quantity}</small></p>
                    <div className="card-actions">
                        <button  onClick={handelPurses} className="btn btn-primary">Purses</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProducts;