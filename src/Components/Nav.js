import React from 'react'
import logo from '../Images/apple-icon-57x57.png'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='control-container'>
                <div className='icon' onClick={() => navigate('/ticket')}>&#10010;</div>
                <div className='icon' onClick={() => navigate('/')}>&#8810;</div>
            </div>
        </nav>
    )
}
