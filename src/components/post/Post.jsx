import React, { useState, useEffect, useContext } from 'react'
import './post.css'
import { Favorite, MoreVert, Notes } from '@mui/icons-material';
import axios from "axios";
import { format } from "timeago.js";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        try{
            axios.put("/posts/" + post._id + "/like", {userId: currentUser._id});
        }
        catch(err){}

        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='post-topLeft'>
                        <Link to={`profile/${user.username}`}>
                            <img className='post-profileImg' src={user.profilePicture ? PF + user.profilePicture : PF+"user/no-avatar.png"} alt=''></img>
                        </Link>
                        
                        <span className='post-username'>{user.username}</span>
                        <span className='post-date'>{format(post.createdAt)}</span>
                    </div>

                    <div className='post-topRight'>
                        <MoreVert></MoreVert>
                    </div>
                </div>

                <div className="post-center">
                    <span className='post-text'>{post?.desc}</span>
                    <img className='post-img' src={PF+post.img} alt=''></img>

                </div>
                <div className="post-bottom">
                    <div className="post-bottomLeft">
                        <Favorite className='like-icon' onClick={likeHandler}></Favorite>
                        <span className='like-counter'>{like} people liked</span>
                    </div>
                    <div className="post-bottomRight">
                        <Notes></Notes>
                        <span className='comment-text'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
