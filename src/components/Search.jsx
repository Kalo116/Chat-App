import React from 'react'

const Search = () => {
    return (
        <div className='search'>

            <div className="search-form">
                <input type="text" placeholder='Find a user' />
            </div>

            <div className="user-chat">
                <img src="https://images.pexels.com/photos/13143531/pexels-photo-13143531.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <div className="user-chat-info">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;