import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../Components/CustomLink';
import { auth } from '../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut=()=>{
        signOut(auth)
        localStorage.removeItem('accesstoken')
    }
   
    const menuItems = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>
        <li><CustomLink to='/contact'>Contact</CustomLink></li>
        <li><CustomLink to='/blog'>Blog</CustomLink></li>
        <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>
        {
            user ? <button className="btn btn-link" onClick={logOut}>logout</button> : <li><CustomLink to='/login'>Login</CustomLink></li>
        }
        {
            
                user && <>
                 <li><Link to='/dashboard'>Dashboard</Link></li>
            
                </>
            
        }




    </>
    return (
        <div className="navbar bg-base-100 pb-5 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-primary"><i>Princes parts Menufacture</i></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                {user && <>
                    <div className="avatar online">
                        <div className="w-12 rounded-full">

                            {
                                user.photoURL ?<img src={user?.photoURL} />:<img src= 'https://api.lorem.space/image/face?hash=53273' />
                            }
                        </div>
                    </div>
                    <div className='mx-5'>{user?.displayName}</div>
                </>}
            </div>
        </div>
    );
};

export default Navbar;