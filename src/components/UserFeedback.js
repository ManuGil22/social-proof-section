import React from 'react';
import '../stylesheets/UserFeedback.css'

function UserFeedback ({ name, status, text }) {
    let userName = name.split(' ')[0].toLowerCase();

    return (
        <div className='feedback'>
            <div className='user'>
                <img className='user-img' src={require(`../images/image-${userName}.jpg`)} alt={`Foto de ${userName}`}></img>
                <div className='user-info'>
                    <p className='name'>{name}</p>
                    <p className='status'>{status}</p>
                </div>
            </div>
            <p className='text'>" {text}"</p>
        </div>
    )
};

export default UserFeedback;