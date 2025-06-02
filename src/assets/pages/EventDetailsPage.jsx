import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()

        const [event, setEvent] = useState({})
    
        const getEvents = async () => {
            const res = await fetch(`URL från eventService API/${id}`)
    
            if(res.ok) {
                const response = await res.json()
                setEvent(response.result)
            }
        }

            useEffect(() => {
        
            }, [])

  return (
    <div className='event-details'>
        <h1>{event.title}</h1>
        <Link to={`events/booking/${id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetailsPage