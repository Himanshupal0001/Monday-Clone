import React from 'react'
import blankAvatar from '../Images/pngegg (3).png'

export default function AvatarDisplay({ ticket }) {
    return (
        <div className='avatar-container'>
            <div className='img-container'>
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of ' + ticket.owner} />
            </div>
        </div>
    )
}
