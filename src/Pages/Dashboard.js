import React from 'react'
import TicketCard from '../Components/TicketCard'
import avatar from '../Images/pexels-moose-photos-1036623.jpg'

const tickets = [
    {
        category: 'Q1 2022',
        color: 'red',
        title: 'NFT safety 101',
        owner: 'Himanshu',
        avatar: avatar,
        status: 'done',
        priority: 5,
        progress: 85,
        description: 'Object to fill data for monday.com clone',
        timestamp: '2022-05-17T07:36:17+0000'
    },
    {
        category: 'Q2 2022',
        color: 'orange',
        title: 'NFT safety 102',
        owner: 'Himanshu',
        avatar: avatar,
        status: 'pending',
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
        avatar: avatar,
        status: 'working on it',
        priority: 4,
        progress: 20,
        description: 'Object to fill data for monday.com clone',
        timestamp: '2022-05-17T07:36:17+0000'
    },
    {
        category: 'Q2 2022',
        color: 'orange',
        title: 'NFT safety 104',
        owner: 'Himanshu',
        avatar: avatar,
        status: 'done',
        priority: 2,
        progress: 70,
        description: 'Object to fill data for monday.com clone',
        timestamp: '2022-05-17T07:36:17+0000'
    },
    {
        category: 'Q3 2022',
        color: 'maroon',
        title: 'NFT safety 105',
        owner: 'Himanshu',
        avatar: avatar,
        status: 'done',
        priority: 4,
        progress: 50,
        description: 'Object to fill data for monday.com clone',
        timestamp: '2022-05-17T07:36:17+0000'
    }
]

const colors = ['rgb(186,255,201)',
    'rgb(255,223,186)',
    'rgb(255,179,186)',
    'rgb(186,255,255)']


export default function Dashboard() {


    const uniquecategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]


    return (
        <div className='dashboard'>
            <h1>My Project</h1>
            <div className='ticket-container'>
                {tickets && uniquecategories?.map((uniquecategory, uniqueIndex) => (
                    <div key={uniqueIndex}>
                        <h3>{uniquecategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniquecategory)
                            .map((filteredTicket, ticketIndex) => (
                                <TicketCard
                                    key={ticketIndex}
                                    color={colors[uniqueIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }

                    </div>
                ))}

                {/* {tickets.map((ticket, index) => (<TicketCard ticket={ticket} key={index} />))} */}
            </div>
        </div >
    )
}
