import React from 'react'
import './online.css'

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div>
            <li className='rightbar-friend'>
                <div className='rightbar-profileImg-conatiner'>
                    <img className='rightbar-profile-img' src={PF + user.profilePicture} alt="" />
                    <span className='online-badge'></span>
                </div>

                <span className='rightbar-username'>{user.username}</span>
             </li>
        </div>
    );
}
