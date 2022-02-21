import React, { useEffect, useState } from 'react';
import './comments.css';
import InputComment from '../inputComment/InputComment';
import axios from 'axios';
import { format } from 'timeago.js';

const Comments = ({comment}) => {
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${comment.userId}`);
        setUser(res.data);
    }
    fetchUser();
}, []);

  return (
    <div className='comment'>
      <div className='comment-body'>
        <div className='comment-top'>
          <img className='comment-proImg' src={user.profilePicture ? PF + user.profilePicture : PF+"user/no-avatar.png"} alt=''></img>
          <span className='comment-user'>{user.username}</span>
          <span className='comment-date'>{format(comment.createdAt)}</span>
        </div>

        <div className='comment-center'>
          <span className='commentText'>{comment.comment}</span>
        </div>
      </div>

    </div>
  );
};

export default Comments;
