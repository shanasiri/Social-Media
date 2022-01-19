import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './chatOnline.css'

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try{
            const res = await axios.get(`/conversations/find/${currentId}/${user._id}`);

            setCurrentChat(res.data);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='chat-online'>
            {onlineFriends.map((o) => (
                <div className="chatOnline-friend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImg-container">
                        <img className='chatOnline-img' src={o?.profilePicture ? PF + o.profilePicture : PF + "user/no-avatar.png"} alt=''></img>
                        <div className="online-badge"></div>
                    </div>
                    <span className='chatOnline-name'>{o?.username}</span>
                </div>
            ))}
                        
        </div>
    )
}
