import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import SingleProducts from './SingleProducts';

const HomePageParts = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch(`http://localhost:5000/product`).then(rs => rs.json()))
    if (isLoading) {
        return <Loading></Loading>
        
    }
    return (
        <div>
            <h2 className='text-primary text-2xl text-center my-8'>Different Parts</h2>
            <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                   products.map(products => <SingleProducts key={products._id} products={products}></SingleProducts>)
                }
            </div>
        </div>
    );
};

export default HomePageParts;