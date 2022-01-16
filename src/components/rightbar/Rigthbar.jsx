import React, { useContext, useEffect } from 'react'
import './rightbar.css'
import { Add, Cake, Remove } from '@mui/icons-material';
import { Users } from '../../dummyData'
import Online from '../online/Online';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Rigthbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);

    const {user:currentUser, dispatch} = useContext(AuthContext);

    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

    /*useEffect(() => {
        setFollowed(currentUser.followings.includes(user?.id));
    }, [currentUser, user.id]);*/

    useEffect(() => {
        const getFriends = async() => {
            try{
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try{
            if(followed){
                await axios.put("/users/" + user._id + "/unfollow", {
                    userId : currentUser._id,
                });
                dispatch({type : "UNFOLLOW", payload : user._id});
            }
            else{
                await axios.put("/users/" + user._id + "/follow", {
                    userId : currentUser._id,
                });
                dispatch({type : "FOLLOW", payload : user._id});
            }
        }
        catch(err){
            console.log(err);
        }
        setFollowed(!followed);
    }

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday-container">
                    <Cake className='birthday-icon'></Cake>
                    <span className='birthday-text'><b>Shanaka Asiri and 3 others </b> have a birthday today.</span>
                </div>

                <div className='online-friends'>
                    <h3 className='online-title'>Online Friends</h3>
                    <ul className='online-firedList'>
                        {Users.map(u => (
                            <Online key={u.id} user={u}></Online>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className='rightbar-followButton' onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove></Remove> : <Add></Add>}
                    </button>
                )}

                <div className='user-info'>
                    <h4 className='rightbar-title'>User Information</h4>

                    <div className='rightbar-info'>
                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>City:</span>
                            <span className='rightbar-infoValue'>{user.city}</span>
                        </div>

                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>From:</span>
                            <span className='rightbar-infoValue'>{user.from}</span>
                        </div>

                        <div className='rightbar-infoItem'>
                            <span className='rightbar-infoKey'>Relationship:</span>
                            <span className='rightbar-infoValue'>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                        </div>
                    </div>
                </div>
                

                <h4 className='rightbar-title'>User Friends</h4>

                <div className='rightbar-followings'>
                    {friends.map(friend => (
                        <Link to={"/profile/" + friend.username} style={{textDecoration: "none", color: "black"}}>
                            <div className='rightbar-following'>
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "user/no-avatar.png"} alt="" className='rightbar-followingImg' />
                                <span className='rightbar-followingName'>{friend.username}</span>
                            </div>
                        </Link>
                        
                    ))}        
                </div> 
            </>
            
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbar-wrapper">
                {user ? <ProfileRightbar></ProfileRightbar> : <HomeRightbar></HomeRightbar>}
            </div>
        </div>
    )
}
