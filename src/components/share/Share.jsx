import React, { useContext } from 'react'
import './share.css'
import {Label, LocationOn, PermMedia, EmojiEmotions } from '@mui/icons-material';
import { AuthContext } from "../../context/AuthContext";
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user} = useContext(AuthContext);

    const desc = useRef();

    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newPost = {
            userId : user._id,
            desc : desc.current.value,     
        }

        if(file){
            const data = new FormData();
            const fileName = file.name;

            data.append("file", file);
            data.append("name", fileName);

            newPost.img = fileName;

            try{
                await axios.post("/upload", data);
            }
            catch(err){
                console.log(err);
            }
        }

        try{
            await axios.post("/posts", newPost);
            window.location.reload();
        }
        catch(err){

        }
    }

    return (
        <div className='share'>
            <div className='share-wrapper'>
                <div className='share-top'>
                    <img className='share-profile-img' src={user.profilePicture ? PF + user.profilePicture : PF + "user/no-avatar.png"} alt=''></img>
                    <input placeholder={'What is in your mind ' + user.username + '?'} className='share-input' ref={desc}/>
                </div>

                <hr className='share-hr'></hr>

                <form className='share-bottom' onSubmit={submitHandler}>
                    <div className='share-options'>
                        <label htmlFor='file' className='share-option'>
                            <PermMedia htmlColor='red' className='share-icon'></PermMedia>
                            <span className='share-optionText'>Photo and Video</span>
                            <input style={{display:"none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])}></input>
                        </label>

                        <div className='share-option'>
                            <Label htmlColor='blue' className='share-icon'></Label>
                            <span className='share-optionText'>Tag</span>
                        </div>

                        <div className='share-option'>
                            <LocationOn htmlColor='green' className='share-icon'></LocationOn>
                            <span className='share-optionText'>Location</span>
                        </div>

                        <div className='share-option'>
                            <EmojiEmotions htmlColor='goldenrod' className='share-icon'></EmojiEmotions>
                            <span className='share-optionText'>Feeling</span>
                        </div>
                    </div>

                    <button className='share-button' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
