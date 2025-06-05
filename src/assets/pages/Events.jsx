import React, { useEffect, useState } from 'react'
import EventList from '../components/EventList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Events = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const res = await fetch("https://localhost:7119/api/events")


      console.log("Fetch status:", res.status)
      if (!res.ok) {
        console.error("API‐anrop misslyckades med status:", res.status)
        return
      }

      const data = await res.json()
      console.log("Raw data från API:", data)

      // Här brukar data ha formen { success: true, result: [ ... ] }
      if (data.result && Array.isArray(data.result)) {
        setEvents(data.result)
      } else if (Array.isArray(data)) {
        // Om din API vissa gånger returnerar en ren array (ej inbäddad i `result`)
        setEvents(data)
      } else {
        console.warn("Okänt format på JSON‐svaret, sätter events till tom array")
        setEvents([])
      }
    } catch (err) {
      console.error("Fel vid fetch‐anrop:", err)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className="portal-wrapper">
      <nav><Nav /></nav>
      <header><Header /></header>
      <main>
        <EventList events={events} />
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

export default Events
