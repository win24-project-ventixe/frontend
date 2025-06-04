import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import EventList from '../components/EventList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

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
            <nav>
                <Nav />
            </nav>
            <header>
                <Header />
            </header>
            <main>
                <EventList />
            </main>
            <footer>
                <Footer />
            </footer>


        </div> 
    )
}
    

export default Events