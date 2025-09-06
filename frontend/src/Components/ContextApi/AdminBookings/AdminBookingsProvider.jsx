import { useStepContext } from '@mui/material/Step'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AdminBookingsContext = createContext()




const AdminBookingsProvider = ({children}) => {
  
  const [products,setProducts] = useState([])
const baseUrl = "http://localhost:3000"

const fetchBookings = async()=>{
  const response = await fetch(`${baseUrl}/bookings/all`,{
    method:'GET',
    headers:{
      'Content-type':'application/json'
    },
    credentials:'include'
  })
  const data = await response.json()
  console.log(data.success[0].items[0].price)

  setProducts(data.success)

}
  return (
    <AdminBookingsContext.Provider value={{fetchBookings,products}}>
      {children} 
    </AdminBookingsContext.Provider>
    
  )
}

export default AdminBookingsProvider