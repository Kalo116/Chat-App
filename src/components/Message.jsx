import React from 'react'

const Message = () => {
    return (
        <div className='message owner'>
            <div className="message-info">
                <img src="https://images.pexels.com/photos/13143531/pexels-photo-13143531.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <span>just now</span>
            </div>

            <div className="message-content">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/13143531/pexels-photo-13143531.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
            </div>
        </div>
    )
}

export default Message