import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
import MyorderCancel from './MyorderCancel';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [deletingProduct, setDeletingProduct] = useState(null)
    const [order, setOrder] = useState([])


    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://guarded-inlet-86447.herokuapp.com/myorder?myorder=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(rs => {
                    if (rs.status === 401 || rs.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accesstoken')
                        navigate('/')

                    }

                    return rs.json()
                })
                .then(data => {
                    
                    setOrder(data)
                })
        }
    }, [order,deletingProduct])
    return (
        <div>
            <h1>My order {order.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    {
                        order.length > 0 ? <>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Product-Name</th>
                                    <th>Order Quentity </th>
                                    <th>Per_unit_price</th>
                                    <th>Total Price </th>
                                    <th>Status</th>
                                    <th></th>
                                    <th>Action </th>
                                    <th></th>

                                </tr>
                            </thead>
                        </> : 'You have no order'
                    }
                    <tbody>
                        {
                            order.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th>{order.displayName} </th>
                                <td>{order.productName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price} $ </td>
                                <td>{parseInt(order.orderQuantity) * parseInt(order.price)} $</td>
                                <td>pending</td>
                                <td> <button onClick={()=> navigate('/payment')} className="btn btn-xs btn-primary">Pay</button></td>
                                <td><label onClick={() => setDeletingProduct(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">cencel</label></td>

                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
            {

                deletingProduct && <MyorderCancel deletingProduct={deletingProduct}  setDeletingProduct={setDeletingProduct}></MyorderCancel>

            }
        </div>
    );
};

export default MyOrder;