import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
    return (
        <div className='form-container'>
            <div className="form-wrapper">
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input style={{ display: 'none' }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={Add} alt="add-avatar" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register