import React from 'react';
import { toast } from 'react-toastify';

const MyorderCancel = ({ deletingProduct, setDeletingProduct }) => {
    const { productName, _id } = deletingProduct
    const handelDelete = () => {
        fetch(`https://guarded-inlet-86447.herokuapp.com/celcelorder/${_id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
            }
        }).then(rs => rs.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product:${productName} is deleted`)
                    setDeletingProduct(null)
                    // refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure want to delete {productName}</h3>

                    <div class="modal-action">
                        <button onClick={() => handelDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cencel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MyorderCancel;
