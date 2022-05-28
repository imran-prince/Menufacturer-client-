import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeletingManageProduct from './DeletingManageProduct';
import Loading from './Loading';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrder = () => {
    const [deletingProduct,setDeletingProduct]=useState(null)
    const { data: allorder, isLoading, refetch } = useQuery('allorder', () => fetch('https://guarded-inlet-86447.herokuapp.com/order', {
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
            <h2 className="text-2xl">Total Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product</th>
                            <th>Customer Email</th>
                            <th>Order</th>
                            <th>Status</th>
                            
                            <th>Admin Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorder?.map((allorder, index) => <ManageAllOrderRow  index={index} key={allorder._id}  allorder={allorder} setDeletingProduct={setDeletingProduct} refetch={refetch}></ManageAllOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                
                    deletingProduct &&<DeletingManageProduct deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeletingManageProduct> 
                
            }
             
        </div>
    );
};

export default ManageAllOrder;