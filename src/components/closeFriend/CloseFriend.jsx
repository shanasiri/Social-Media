import React from 'react'
import './closeFriend.css'

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div>
            <li className='sidebar-friend'>
                <img className='sidebar-friendImg' src={PF + user.profilePicture} alt=''/>
                <span className='sidebar-friendName'>{user.username}</span>
            </li>
        </div>
    );
}
