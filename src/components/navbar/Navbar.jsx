import React, { useContext} from 'react'
import './navbar.css'
import {Search, Notifications, Message, Person} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

export default function Navbar({socket}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user} = useContext(AuthContext);

    return (
        <div className='navbar-container'>
            <div className='navbar-left'>
                <Link to="/" style={{textDecoration:"none", color:"black"}}>
                    <span className='logo'>GEt It</span>
                </Link> 
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

                <Link to={`/profile/${user.username}`}>
                    <img className='navbar-img' src={user.profilePicture ? PF + user.profilePicture : PF + "user/no-avatar.png"} alt=''></img>
                </Link>               
            </div>
        </div>
    )
}
