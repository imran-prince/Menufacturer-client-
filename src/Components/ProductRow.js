import React from 'react';
import { ToastContainer } from 'react-toastify';

const ProductRow = ({ allproductInfo, index ,setDeletingProduct}) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{allproductInfo?.name}</td>
            <td> <div class="avatar">
                <div class="w-16 rounded">
                    <img src= {allproductInfo?.img} />
                </div>
            </div></td>
            {/* <td><button className="btn btn-xs">Update Product</button></td> */}
            <td><label onClick={()=>setDeletingProduct(allproductInfo)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default ProductRow;