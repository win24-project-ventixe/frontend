
import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventDetailsPage from './assets/pages/EventDetailsPage'

function App() {

  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="events/bookings:id" element={<Bookings />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
    </Routes>
  )
}

export default App
