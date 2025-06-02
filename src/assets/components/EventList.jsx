import React, { useEffect, useState } from 'react'

const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("URL från eventService API")

        if(res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {

    }, [])

  return (
    <section id='events'>
        {
            events.map(event => (
                    <EventCard key={event.id} item={event} />
                ))
        }

    </section>
  )
}

export default EventList