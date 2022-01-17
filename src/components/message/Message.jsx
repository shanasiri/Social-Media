import React from 'react'
import './message.css'
import {format} from 'timeago.js'

export default function Message({message, own}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="message-top">
                <img className='message-img' src={PF + "user/1.jpg"} alt=''></img>
                <p className='message-text'>{message.text}</p>
            </div>
            <div className="message-bottom">{format(message.createdAt)}</div>
        </div>
    )
}
