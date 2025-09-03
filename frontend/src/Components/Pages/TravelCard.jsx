import React from 'react'
import { FaHotel } from "react-icons/fa6";
import { SiMentorcruise } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { FaPlane } from 'react-icons/fa6';
import { useContext } from 'react';

import { StripeContext } from '../ContextApi/StripeGateway/StripeProvider';


const TravelCard = ({destination}) => {


  const {handlePayment} = useContext(StripeContext)

  const handleStripe = (price,destination)=>{
    handlePayment(price,destination)
  }


  const selectedIcons = {
    hotel: <FaHotel className='text-2xl text-gray-600' />,
    cruises: <SiMentorcruise className='text-2xl text-gray-600' />,
    car: <FaCar className='text-2xl text-gray-600' />,
    flights: <FaPlane className='text-2xl text-gray-600' />
  }
  return (
    <div>
<div className='flex  gap-10 items-start bg-white  p-10 shadow-lg'>

                        {/* travel card  */}
                        <img src={`http://localhost:3000/uploads/${destination.image}`} alt="" className='w-[500px] h-[250px] object-cover rounded-xl' />
                        <div>

                            <span className='bg-green-300/20 px-9 py-2 rounded-full text-green-600 '>{destination.destination}</span>
                            <div className='flex flex-wrap gap-2 mt-7 text-gray-600 font-primary items-center'>
                           {/* <p>{destination.services}</p> */}

                           {
                            destination.services.map((service)=>(
                                <div key={service} className='flex items-center gap-2 mt-2'>
                                  <p>{selectedIcons[service.toLowerCase()]}</p>
                                  <p>{service}</p>
                                </div>
                            ))
                           }
                            </div>
                        
                        <div className='mt-16'>
                            <p className='font-primary font-semibold text-lg'>${destination.price}/day</p>
                            <button className='bg-green-500 px-4 py-1 rounded-md text-white font-primary cursor-pointer transition-all duration-100 hover:bg-green-400' onClick={()=>handleStripe(destination.price,destination.destination)} >Book Now</button>
                              
                        </div>
                        
                        </div>

                        <div>
                        

                    </div>
                    
                    </div>

    </div>
  )
}

export default TravelCard









