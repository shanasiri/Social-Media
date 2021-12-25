import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className="login-left">
                    <h3 className='login-logo'>GEt It</h3>
                    <span className='login-desc'>Connect with friend and the world around on GEt It</span>
                </div>

                <div className="login-right">
                    <div className="login-box">
                        <input placeholder='Email' className='login-input'></input>
                        <input placeholder='Password' className='login-input'></input>
                        <button className='login-button'>Log In</button>
                        <span className='login-forgot'>Forgot Password</span>
                        <button className='register-button'>Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
