import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrder = () => {
    const { data: allorder, isLoading, refetch } = useQuery('allorder', () => fetch('http://localhost:5000/order', {
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
                            <th>Name</th>
                            <th></th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorder?.map((allorder, index) => <ManageAllOrderRow  index={index} key={allorder._id}  allorder={allorder} refetch={refetch}></ManageAllOrderRow>)
                        }

                    </tbody>
                </table>
            </div>
             
        </div>
    );
};

export default ManageAllOrder;