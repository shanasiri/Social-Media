import React from 'react'
import './closeFriend.css'

export default function CloseFriend({user}) {
    return (
        <div>
            <li className='sidebar-friend'>
                <img className='sidebar-friendImg' src={user.profilePicture} alt=''/>
                <span className='sidebar-friendName'>{user.username}</span>
            </li>
        </div>
    )
}
