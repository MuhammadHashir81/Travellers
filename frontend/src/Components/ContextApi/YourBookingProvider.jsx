import React from 'react'
import { createContext,useState } from 'react'

export const YourBookingContext = createContext()



const YourBookingProvider = ({children}) => {
    const [userSpecificBooking,setUserSpecificBooking] = useState([])

    const baseUrl = 'http://localhost:3000'

    const userBookings = async() => {
       const response = await fetch(`${baseUrl}/your/booking`,{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        },
        credentials:'include'
       })
       const data = await response.json()
       console.log(data)
       setUserSpecificBooking(data.success)
    }
  return (
    <YourBookingContext.Provider value={{userBookings,userSpecificBooking}}>
        {children}
    </YourBookingContext.Provider>
   

  )
}

export default YourBookingProvider