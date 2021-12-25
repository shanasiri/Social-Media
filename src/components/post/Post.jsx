import React, { useState } from 'react'
import './post.css'
import { Favorite, MoreVert, Notes } from '@mui/icons-material';
import { Users } from '../../dummyData'

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='post-topLeft'>
                        <img className='post-profileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=''></img>
                        <span className='post-username'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className='post-date'>{post.date}</span>
                    </div>

                    <div className='post-topRight'>
                        <MoreVert></MoreVert>
                    </div>
                </div>

                <div className="post-center">
                    <span className='post-text'>{post?.desc}</span>
                    <img className='post-img' src={post.photo} alt=''></img>

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
