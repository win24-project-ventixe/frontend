
import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import Events from './assets/pages/Events'
import Bookings from './assets/pages/Bookings'


function App() {

  return (
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/bookings/:id" element={<Bookings />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
  )
}

export default App
