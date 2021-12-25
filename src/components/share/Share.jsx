import React from 'react'
import './share.css'
import {Label, LocationOn, PermMedia, EmojiEmotions } from '@mui/icons-material';

export default function Share() {
    return (
        <div className='share'>
            <div className='share-wrapper'>
                <div className='share-top'>
                    <img className='share-profile-img' src='./images/user/1.jpg' alt=''></img>
                    <input placeholder='What is in your mind?' className='share-input'/>
                </div>

                <hr className='share-hr'></hr>

                <div className='share-bottom'>
                    <div className='share-options'>
                        <div className='share-option'>
                            <PermMedia htmlColor='red' className='share-icon'></PermMedia>
                            <span className='share-optionText'>Photo and Video</span>
                        </div>

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

                    <button className='share-button'>Share</button>
                </div>
            </div>
        </div>
    )
}
