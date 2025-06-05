import React from 'react'
import { Link } from 'react-router-dom'
import MapPin from '../Images/MapPin.svg';

const EventCard = ({item}) => {
  return (
    <Link to={`/events/${item.id}`}>
        <div className='event-card'>
            <div className='card-img'></div>
            <div className='card-text-group'>
              <div className='card-date'>{item.eventDate}</div>
              <div className='card-title'>{item.title}</div>
              <div className='card-location-group'>
                <img src={MapPin} alt='Map pin' />
                <div className='card-location'>{item.location}</div>  
              </div>
              
            </div>
            
        </div>
    </Link>
    
  )
}

export default EventCard