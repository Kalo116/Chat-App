import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className='logo'>Lama Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/13143531/pexels-photo-13143531.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <span>John</span>
                <button>Log out</button>
            </div>
        </div>
    )
}

export default Navbar