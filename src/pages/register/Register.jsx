import React, { useRef } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const navigate = useNavigate();
    
    const handleClick = async (e) => {
        e.preventDefault();

        if(passwordConfirm.current.value !== password.current.value){
            passwordConfirm.current.setCustomValidity("Password don't match..!");
        }
        else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            }
            try{
                await axios.post("/auth/register", user);
                navigate("/login");
            }
            catch(err){
                console.log(err);
            }
            
        }
    }

    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className="login-left">
                    <h3 className='login-logo'>GEt It</h3>
                    <span className='login-desc'>Connect with friend and the world around on GEt It</span>
                </div>

                <div className="login-right">
                    <form className="login-box" onSubmit={handleClick}>
                        <input required placeholder='Username' className='login-input' ref={username}></input>
                        <input required type='email' placeholder='Email' className='login-input' ref={email}></input>
                        <input required type='password' minLength='6' placeholder='Password' className='login-input' ref={password}></input>
                        <input required type='password' placeholder='Password Confirm' className='login-input' ref={passwordConfirm}></input>
                        <button className='login-button' type='submit'>Sign Up</button>
                        <button className='register-button'>Log into Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
