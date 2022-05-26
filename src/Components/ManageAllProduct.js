import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import Loading from './Loading';
import ProductRow from './ProductRow';

const ManageAllProduct = () => {
    const [deletingProduct,setDeletingProduct]=useState(null)
    const { data: allproduct, isLoading, refetch } = useQuery('allproduct', () => fetch('http://localhost:5000/product', {
        method: "GET",
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        // }
    }).then(rs => rs.json()))
 
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Total Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allproduct?.map((product, index) => <ProductRow index={index} key={product._id} setDeletingProduct={setDeletingProduct} allproductInfo={product} refetch={refetch}></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&<DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingDoctor={setDeletingProduct}></DeleteConfirmModal> 
            }
        </div>
    );
};

export default ManageAllProduct;