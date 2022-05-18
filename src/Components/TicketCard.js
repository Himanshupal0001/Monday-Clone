import React from 'react'
import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay';
import StatusDisplay from '../Components/StatusDisplay';
import ProgressBar from '../Components/ProgressBar';
import DeleteBlock from '../Components/DeleteBlock';
import PriorityDisplay from './PriorityDispaly';

export default function TicketCard({ ticket, color }) {
    return (
        <div className='ticket-card'>
            <Link to={`/ticket/${ticket.documentId}`} id='link'>
                <div className='ticket-color' />
                <h3>{ticket.title}</h3>
                <AvatarDisplay />
                <StatusDisplay />
                <PriorityDisplay />
                <ProgressBar />
            </Link>
            <DeleteBlock />
        </div>
    )
}

