import React from 'react';

const SingleProducts = ({ products }) => {
    const { name, img,description,price_per_unit,minimum_quantity,avilable_quantity } = products
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src= {img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title"> {name}</h2>
                    <p><small>price_per_unit{price_per_unit}</small></p>
                    <p><small>Minimum_Order_quantity{minimum_quantity}</small></p>
                    <p><small>avilable_quantity{avilable_quantity}</small></p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Purses</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProducts;