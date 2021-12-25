import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className="login-left">
                    <h3 className='login-logo'>GEt It</h3>
                    <span className='login-desc'>Connect with friend and the world around on GEt It</span>
                </div>

                <div className="login-right">
                    <div className="login-box">
                        <input placeholder='Username' className='login-input'></input>
                        <input placeholder='Email' className='login-input'></input>
                        <input placeholder='Password' className='login-input'></input>
                        <input placeholder='Password Confirm' className='login-input'></input>
                        <button className='login-button'>Sign Up</button>
                        <button className='register-button'>Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
