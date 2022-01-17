import React, { useContext, useRef} from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch);
    }

    console.log(user);

    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className="login-left">
                    <h3 className='login-logo'>GEt It</h3>
                    <span className='login-desc'>Connect with friend and the world around on GEt It</span>
                </div>

                <div className="login-right">
                    <form className="login-box" onSubmit={handleClick}>
                        <input type="email" required placeholder='Email' className='login-input' ref={email}></input>
                        <input type="password" required minLength="6" placeholder='Password' className='login-input' ref={password}></input>
                        <button className='login-button' disabled={isFetching}>{isFetching ? (<CircularProgress color="white" size="20px" />) : "Log In"}</button>
                        <span className='login-forgot'>Forgot Password</span>
                        <button className='register-button'>Create a New Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
