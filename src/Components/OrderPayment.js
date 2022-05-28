import React from 'react';
import { useParams } from 'react-router-dom';
import useAllProduct from './hooks/useAllProduct';

const OrderPayment = () => {
    const { _id } = useParams()
    const [products] = useAllProduct()
    const orderProduct = products.find(product => product._id === _id)
    
    return (
        <div className="hero min-h-screen bg-base-200">
            {/* <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={orderProduct?.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> Name:{orderProduct?.name}</h2>
                            <p>Price_per_unit : $ {orderProduct?.price_per_unit}</p>
                            <p>Minimum_Order_quantity : {orderProduct?.minimum_quantity}</p>
                            <p>Avilable_quantity : {orderProduct?.avilable_quantity}</p>
                            <p><i className='text-primary text-2xl  font-bold'>Description</i>: {orderProduct?.description}</p>

                        </div>
                    </div>

                </div>
                 
            </div> */}
            dsgfsd
          
        </div>
    );
};

export default OrderPayment;