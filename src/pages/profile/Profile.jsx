import React, {useState, useEffect} from 'react'
import './profile.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rigthbar from '../../components/rightbar/Rigthbar'
import axios from "axios";
import { useParams } from 'react-router'


export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});

    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    return (
        <div>
            <>
                <Navbar></Navbar>

                <div className='profile'>
                    <Sidebar></Sidebar>
                    <div className='profile-right'>
                        <div className='profile-rightTop'>
                            <div className="profile-cover">
                                <img className='profile-coverImg' src={user.coverPicture ? user.coverPicture : PF + "user/no-cover.png"} alt="" />
                                <img className='profile-userImg' src={user.profilePicture ? PF + user.profilePicture : PF + "user/no-avatar.png"} alt="" />
                            </div>

                            <div className="profile-info">
                                <h4 className='profile-infoName'>{user.username}</h4>
                                <span className='profile-infoDesc'>{user.desc}</span>
                            </div>
                            
                        </div>
                        <div className='profile-rightBottom'>
                            <Feed username={username}></Feed>
                            <Rigthbar user = {user}></Rigthbar>
                        </div>
                        
                    </div>
                    
                </div>
                
            </>
        </div>
    )
}
