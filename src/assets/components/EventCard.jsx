import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({item}) => {
  return (
    <Link to={`/events/${item.id}`}>
        <div className='event-card'>

        </div>
    </Link>
    
  )
}

export default EventCard