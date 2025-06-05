import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import MapPin from '../Images/MapPin.svg';
import CalendarDot from '../Images/CalendarDot.svg';

const EventDetailsPage = () => {
    const {id} = useParams()

        const [event, setEvent] = useState({})
    
        const getEvents = async () => {
            const res = await fetch(`https://ecu-eventservice-dmbkb3ekfnhyh8f7.swedencentral-01.azurewebsites.net/api/events/${id}`)
    
            if(res.ok) {
                const response = await res.json()
                setEvent(response.result)
            }
        }

            useEffect(() => {
                getEvents()
            }, [])

  return (
     <div className="portal-wrapper">
      <nav><Nav /></nav>
      <header>
        <h4 className='portal-header'>Event Details</h4>
      </header>
      <main>
    <div className='event-details'>
        <div className='event-details-img'></div>
        <div className='event-details-card'>
            <h1>{event.title}</h1>
            <div className='date-location-group'>
                <div className='card-location-group'>
                    <img src={CalendarDot} alt='Calendar icon' />
                    <div className='card-date'>{event.eventDate}</div>
                </div>
                    
                <div className='card-location-group'>
                    <img src={MapPin} alt='Map pin' />
                    <div className='card-location'>{event.location}</div>  
                </div>
            </div>

                <div className='border'></div>

                <div>
                    <div className='about-title'>About Event</div>
                    <span className='event-details-description'>{event.description}</span>
                </div>
            <Link className='btn-book' state={{ event: event }} to={`/events/bookings/${id}`}>Book Event</Link>
            
        </div>


    </div> 
      </main>
      <footer><Footer /></footer>
    </div>


  )
}

export default EventDetailsPage