import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import { auth } from '../firebase.init';

const ManageAllOrderRow = ({allorder,index,setDeletingProduct}) => {
    const [user]=useAuthState(auth)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{allorder?.productName}</td>
            <td> <div class="avatar">
                <div class="w-16 rounded">
                    <img src={allorder?.img} />
                </div>
            </div></td>
            <td>{allorder.customerEmial}</td>
            <td>{allorder?.orderQuantity} pice</td>
            <td>unpaid</td>
 
            <td><label   class="btn btn-xs btn-error">Confirm </label></td>
            <td><label onClick={()=>setDeletingProduct(allorder)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default ManageAllOrderRow;