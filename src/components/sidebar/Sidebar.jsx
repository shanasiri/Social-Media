import React from 'react'
import './sidebar.css'
import {Home, Message, Notifications, WbSunny, Work, Coronavirus} from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <ul className='sidebar-list'>
                    <li className='list-item'>
                        <Home className='sidebar-icon'></Home>
                        <span className='item-text'>Home</span>
                    </li>

                    <li className='list-item'>
                        <Message className='sidebar-icon'></Message>
                        <span className='item-text'>Chats</span>
                    </li>

                    <li className='list-item'>
                        <Notifications className='sidebar-icon'></Notifications>
                        <span className='item-text'>Notifications</span>
                    </li>

                    <li className='list-item'>
                        <Work className='sidebar-icon'></Work>
                        <span className='item-text'>Jobs</span>
                    </li>

                    <li className='list-item'>
                        <WbSunny className='sidebar-icon'></WbSunny>
                        <span className='item-text'>Weather</span>
                    </li>

                    <li className='list-item'>
                        <Coronavirus className='sidebar-icon'></Coronavirus>
                        <span className='item-text'>Covid-19</span>
                    </li>
                </ul>
            </div>

            <button className='sidebar-button'>See More</button>

            <div className='fav-friends'>
                <ul className='sidebar-friendlist'>
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u}></CloseFriend>
                    ))}
                </ul>
            </div>
        </div>
    );
}
