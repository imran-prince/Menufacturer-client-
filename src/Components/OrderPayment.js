import React from 'react';
 
import useAllProduct from './hooks/useAllProduct';

const OrderPayment = () => {
 
    const [products] = useAllProduct()
    const orderProduct = products.find(product => product._id === _id)
    console.log(products)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={orderProduct?.img} alt="Engin" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            Payment System....Upcoming......
                        </div>
                    </div>

                </div>
                 
            </div>
            
          
        </div>
    );
};

export default OrderPayment;