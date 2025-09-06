import React from 'react'
import { createContext,useState } from 'react' 

export const UserBookingContext = createContext()

const UserBookingProvider = ({children}) => {
    const [bookings,setBookings] = useState([])

    const baseUrl = 'http://localhost:3000'


    const fetchUserSpecificDestinations = async() => {
        const response = await fetch(`${baseUrl}/user/booking`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include'
        })

        const data = await response.json()
        setBookings(data.fetchBookings)
        console.log(data)

    }

  return (
    <UserBookingContext value={{fetchUserSpecificDestinations,bookings}}>{children}</UserBookingContext>
    
  )
}

export default UserBookingProvider