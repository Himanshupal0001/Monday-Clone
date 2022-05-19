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
            <div className='ticket-color' style={{ backgroundColor: color }} />
            <Link to={`/ticket/${ticket.documentId}`} id='link'>

                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket} />
                <StatusDisplay status={ticket.status} />
                <PriorityDisplay priority={ticket.priority} />
                <ProgressBar progress={ticket.progress} />
            </Link>
            <DeleteBlock />
        </div>
    )
}

