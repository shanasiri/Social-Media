import React from 'react'
import './navbar.css'
import {Search, Notifications, Message, Person} from '@mui/icons-material';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar-left'>
                <span className='logo'>GEt It</span>
            </div>

            <div className='navbar-center'>
                <div className='searchBar'>
                    <Search className='search-icon'></Search>
                    <input placeholder='Search friends, videos and photos' className='search-input'></input>
                </div>
            </div>

            <div className='navbar-right'>
                <div className='navbar-links'>
                    <span className='navbar-link'>Home</span>
                </div>

                <div className='navbar-icons'>
                    <div className="navbar-icon">
                        <Notifications className='noti-icon'></Notifications>
                        <span className='navbar-icon-badge'>1</span>
                    </div>
                    
                    <div className="navbar-icon">
                        <Message className='msg-icon'></Message>
                        <span className='navbar-icon-badge'>1</span>
                    </div>

                    <div className="navbar-icon">
                        <Person className='per-icon'></Person>
                        <span className='navbar-icon-badge'>1</span>
                    </div>
                </div>

                <img className='navbar-img' src='./images/user/1.jpg' alt=''></img>
            </div>
        </div>
    )
}