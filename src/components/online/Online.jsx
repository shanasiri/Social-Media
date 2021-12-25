import React from 'react'
import './online.css'

export default function Online({user}) {
    return (
        <div>
            <li className='rightbar-friend'>
                <div className='rightbar-profileImg-conatiner'>
                    <img className='rightbar-profile-img' src={user.profilePicture} alt="" />
                    <span className='online-badge'></span>
                </div>

                <span className='rightbar-username'>{user.username}</span>
             </li>
        </div>
    )
}
