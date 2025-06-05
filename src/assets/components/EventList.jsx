import React from 'react'
import EventCard from './EventCard'


  const EventList = ({ events = []}) => {
  return (
    <section id="events">
      {events.length > 0
        ? events.map(event => <EventCard key={event.id} item={event} />)
        : <p>There are currently no events to show.</p>
      }
    </section>
  )
}

export default EventList