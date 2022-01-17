import React from 'react'
import './chatOnline.css'

export default function ChatOnline() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='chat-online'>
            <div className="chatOnline-friend">
                <div className="chatOnlineImg-container">
                    <img className='chatOnline-img' src={PF + "user/1.jpg"} alt=''></img>
                    <div className="online-badge"></div>
                </div>
                <span className='chatOnline-name'>Shanaka Asiri</span>
            </div> 

            <div className="chatOnline-friend">
                <div className="chatOnlineImg-container">
                    <img className='chatOnline-img' src={PF + "user/1.jpg"} alt=''></img>
                    <div className="online-badge"></div>
                </div>
                <span className='chatOnline-name'>Shanaka Asiri</span>
            </div> 

            <div className="chatOnline-friend">
                <div className="chatOnlineImg-container">
                    <img className='chatOnline-img' src={PF + "user/1.jpg"} alt=''></img>
                    <div className="online-badge"></div>
                </div>
                <span className='chatOnline-name'>Shanaka Asiri</span>
            </div> 

            <div className="chatOnline-friend">
                <div className="chatOnlineImg-container">
                    <img className='chatOnline-img' src={PF + "user/1.jpg"} alt=''></img>
                    <div className="online-badge"></div>
                </div>
                <span className='chatOnline-name'>Shanaka Asiri</span>
            </div>    
        </div>
    )
}
