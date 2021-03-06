import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
 
import UserRow from './UserRow';
 

const Allusers = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://guarded-inlet-86447.herokuapp.com/user',{
        method:"GET",
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(rs => rs.json()))
    console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Total Users:  {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                       {
                                users?.map((user,index)=><UserRow index={index} key={user._id} alluserInfo={user} refetch={refetch}></UserRow>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;