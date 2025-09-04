import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';


const BookYourDestination = () => {

    return (
        <div >
            <div className='px-32 my-52 bg-green-100 py-10 flex' >


                <div className='mt-20'>
                    <div className='flex gap-10 items-center'>

                        <div className='w-1/2 ' >
                            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="travel" className='w-[600px] rounded-md' />
                        </div>

                        <div className='w-1/2'>
                        <div className=' flex flex-col items-start '>
                            <h2 className='mb-5 text-5xl font-secondary text-center text-gray-900 font-bold'>Book Your Destination</h2>

                            <p className='font-primary'>Enjoy your journey with <span className='font-bold'> Travellers</span>. Through <span className='font-bold'> Travellers</span> 50,000 people have visited the world and many more to come you could the next traveller so if you want to refresh your life and experience a good journey go ahead and book your destination.</p>
                        </div>

                            <NavLink to='/home/destinations'>
                                <button className='mt-6 px-8 py-2.5 rounded-sm bg-green-500 text-white font-primary transition-all duration-200 hover:bg-green-600 cursor-pointer'>
                                    explore destinations
                                </button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookYourDestination