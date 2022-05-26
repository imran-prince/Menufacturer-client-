import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
 
  
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorder?myorder=${user.email}`, {
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
                    console.log(data)
                    setOrder(data)
                })
        }
    }, [user])
    return (
        <div>
            <h1>My order {order.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Product-Name</th>
                            <th>Order Quentity </th>
                            <th>Per_unit_price</th>
                            <th>Total Price </th>
                            <th></th>
                            <th>Action </th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((order,index) => <tr key={order._id}>
                                <th>{index+1}</th>
                                <th>{order.displayName} </th>
                                <td>{order.productName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price} $ </td>
                                <td>{parseInt(order.orderQuantity)*parseInt(order.price)} $</td>
                                <td> <button   className="btn btn-xs btn-primary">Pay</button></td>
                                <td><button className="btn btn-xs btn-error">Cencel</button></td>

                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;