import React, { useState, useEffect, useContext } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
//import { Posts } from '../../dummyData'
import axios from "axios"
import { io } from 'socket.io-client'
import { AuthContext } from '../../context/AuthContext'

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const [socket, setSocket] = useState(null);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        setSocket(io("ws://localhost:8900"));
    }, []);

    useEffect(() => {
        socket?.emit("addUser", user._id)
    }, [socket, user]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id);
            setPosts(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt);
                })
            );
        }
        fetchPost();
    }, [username, user._id]);

    return (
        <div className='feed'>
            <div className='feed-wrapper'>
                {(!username || username === user.username) &&   <Share></Share>}

                {posts.map((p) => (
                    <Post key={p._id} post={p} socket={socket} user={user}></Post>
                ))}         
            </div>
        </div>
    );
}
