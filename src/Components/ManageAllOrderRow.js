import React from 'react';
import { ToastContainer } from 'react-toastify';

const ManageAllOrderRow = ({allorder,index}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{allorder?.productName}</td>
            <td> <div class="avatar">
                <div class="w-16 rounded">
                    <img src={allorder?.img} />
                </div>
            </div></td>
 
            <td><label   class="btn btn-xs btn-error">pending</label></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default ManageAllOrderRow;