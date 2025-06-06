import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ArrowLeft from '../Images/ArrowLeft.svg';


const Bookings = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()


  const initialEvent = location.state?.event || null

  const [event, setEvent] = useState(initialEvent)

  useEffect(() => {
    if (!initialEvent) {
      getEventFromApi()
    }
  }, [])

  const getEventFromApi = async () => {
    try {
      const res = await fetch(
        `https://ecu-eventservice-dmbkb3ekfnhyh8f7.swedencentral-01.azurewebsites.net/api/events/${id}`
      )
      if (!res.ok) throw new Error("Failed to fetch event")
      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
    }
  }

  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
    ticketQuantity: 1,
  })

  const postBooking = async () => {
    try {
      const res = await fetch(
        `https://ecu-bookingservice-dhbph9c4arduhhe4.swedencentral-01.azurewebsites.net/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (!res.ok) {
        console.error("Booking failed")
      } else {
        console.log("Booking successful")
        navigate("/") // gå tillbaka till eventlistan efter lyckad bokning
      }
    } catch (err) {
      console.error("Error submitting booking", err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postBooking()
  }

  return (
    <div className="center-wrapper">

        <div className='form-card'>
            
            <div className='book-event-group'>
                 <Link to="/" className="btn back-btn">
                    <img src={ArrowLeft} alt="Arrow left icon" />
                </Link>
                <h1>Book Event – {event?.title || "Loading..."}</h1>
            </div>

            <form className='booking-form' onSubmit={handleSubmit} noValidate>
                <div className='form-group'>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='form-group'>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='form-group'>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='form-group'>
                <label>Street Name</label>
                <input
                    type="text"
                    name="streetName"
                    value={formData.streetName}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='form-group'>
                <label>Postal Code</label>
                <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className='form-group'>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                </div>
                <button className='btn-book' type="submit">Book Now</button>
            </form>
            </div>

        </div>
  )
}

export default Bookings
