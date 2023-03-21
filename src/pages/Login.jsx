import React from 'react';
import Add from '../img/addAvatar.png';

const Login = () => {
    return (
        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Lama Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign up</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login