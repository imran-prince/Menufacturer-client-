import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
import Loading from './Loading';

const MyProfile = () => {
    const navigate = useNavigate()
    const [info, setInfo] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(rs => rs.json())
            .then(data => {
                 
                setInfo(data)
            })
    }, [ ])
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card w-96 bg-base-100 justify-center shadow-xl">
                <figure className="px-10 pt-10">

                    {
                        info.photoURL ? <img src={info?.photoURL} /> : <img src='https://api.lorem.space/image/face?hash=53273' />
                    }
                </figure>
                <div className="card-body items-center text-center">
                     {
                         info.displayName && <p>Name : { info.displayName}</p>
                     }
                    
                    <p> Email: {user?.email}</p>
                    
                   <p>LinkedIn profile : <a href={info.linkdin}>  <i className='text-primary'>click me</i> </a></p>
           

                    <div className="card-actions">
                        <button onClick={() => navigate('/updateprofile')} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;