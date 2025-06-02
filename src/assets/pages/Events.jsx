import React, { useEffect } from 'react'
import EventCard from '../components/EventCard'
import EventList from '../components/EventList'

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://localhost:7119/api/events")

        if(res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])


  return (
        <div className='portal-wrapper'>
            <nav />
            <header />
            <main>
                <EventList />
            </main>
          


        </div> 
    )
}
    

export default Events