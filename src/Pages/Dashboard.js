import React from 'react'
import TicketCard from '../Components/TicketCard'
import avatar from '../Images/pngegg (3).png'


export default function Dashboard() {
    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT safety 101',
            owner: 'Himanshu',
            avatar: { avatar },
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Object to fill data for monday.com clone',
            timestamp: '2022-05-17T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'orange',
            title: 'NFT safety 102',
            owner: 'Himanshu',
            avatar: { avatar },
            status: 'done',
            priority: 2,
            progress: 40,
            description: 'Object to fill data for monday.com clone',
            timestamp: '2022-05-17T07:36:17+0000'
        },
        {
            category: 'Q3 2022',
            color: 'maroon',
            title: 'NFT safety 103',
            owner: 'Himanshu',
            avatar: { avatar },
            status: 'done',
            priority: 4,
            progress: 40,
            description: 'Object to fill data for monday.com clone',
            timestamp: '2022-05-17T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'orange',
            title: 'NFT safety 104',
            owner: 'Himanshu',
            avatar: { avatar },
            status: 'done',
            priority: 2,
            progress: 40,
            description: 'Object to fill data for monday.com clone',
            timestamp: '2022-05-17T07:36:17+0000'
        },
        {
            category: 'Q3 2022',
            color: 'maroon',
            title: 'NFT safety 105',
            owner: 'Himanshu',
            avatar: { avatar },
            status: 'done',
            priority: 4,
            progress: 40,
            description: 'Object to fill data for monday.com clone',
            timestamp: '2022-05-17T07:36:17+0000'
        }
    ]

    const uniquecategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]


    return (
        <div className='dashboard'>
            <h1>My Project</h1>
            <div className='ticket-container'>
                {/* {tickets && uniquecategories?.map
                    ((uniqueCategory, categoryIndex) => ( //printing tickets group them by unique category 
                        <div key={categoryIndex} >
                            <h3>{uniqueCategory}</h3>
                            {
                                tickets.filter(ticket => ticket.category === uniquecategories)
                                    .map((filteredTicket, ticketIndex) => (
                                        <TicketCard
                                            key={ticketIndex}
                                            color={filteredTicket.color}
                                            ticket={filteredTicket}
                                        />
                                    ))
                            }

                        </div>
                    ))} */}

                {tickets.map((ticket, index) => (<TicketCard ticket={ticket} key={index} />))}
            </div>
        </div >
    )
}
