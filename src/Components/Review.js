import React from 'react';

const Review = ({ review }) => {
    const {productName,customerName,rating,description}=review
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                 
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {customerName}</h2>
                    <p> Product: {productName} </p>
                    <p className='text-primary'> Rating is {rating} in 5 </p>
                    <p> Description : {description} </p>
                     
                </div>
            </div>

        </div>
    );
};

export default Review;