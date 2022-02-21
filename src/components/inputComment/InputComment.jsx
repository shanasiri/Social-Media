import React from 'react';
import { useContext } from 'react';
import './inputComment.css';
import {AuthContext} from '../../context/AuthContext';
import { useRef } from 'react';
import axios from 'axios';

const InputComment = ({children}) => {
    const {user} = useContext(AuthContext);

    const comment = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();

        const newComment = {
            userId : user._id,
            comment : comment.current.value
        }

        try{
            await axios.post("/comments", newComment);
            window.location.reload(); 
        }
        catch(err){}
    }

    return (
        <form className="post-footer comment_input" onSubmit={submitHandler}>
            {children}
            <input type="text" placeholder={"Add your comments " + user.username} ref={comment}></input>

            <button type="submit" className="postBtn">Post</button>
        </form>
    );
};

export default InputComment;
