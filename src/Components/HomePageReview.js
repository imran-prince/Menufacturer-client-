import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import Review from './Review';

const HomePageReview = () => {
    const { data: review, isLoading } = useQuery('review', () => fetch(`http://localhost:5000/review`).then(rs => rs.json()))
    if (isLoading) {
        return <Loading></Loading>

    }
    return (
        <div className=''>
            <h2 className='text-primary text-2xl text-center my-15  '>Customer Review</h2>
            <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-15'>
                {
                    review.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default HomePageReview;