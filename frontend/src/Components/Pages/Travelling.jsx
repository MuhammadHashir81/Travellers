import React, { useState } from 'react'
import TravelCard from './TravelCard';
import { useContext } from 'react';
// import { GetDestinationsContext } from '../ContextApi/GetDestinations';
import { ManageDestinationContext } from '../ContextApi/ManageDestinationsProvider';
import { useEffect } from 'react';
const Travelling = () => {
    const { getAllDestinations,adminDestinations } = useContext(ManageDestinationContext);
    console.log("Destinations:", adminDestinations);

    
    
    const [value, setValue] = useState(0);
    const filteredDestinations = adminDestinations.filter(destination => destination.price <= value)
    console.log("Filtered Destinations:", filteredDestinations);


    useEffect(() =>{
        // Fetch all destinations when the component mounts
        getAllDestinations()

        console.log("Fetching all destinations...");

    },[])
    return (
        <div>
            <div className='px-32 my-52'>
                <div className='flex justify-between'>
                    <div>

                        {
                            value === 0 ? (
                                adminDestinations.map((destination) => (
                                    <TravelCard key={destination._id} destination={destination} />
                                ))
                            ):
                           
                                filteredDestinations.map((destination) => (
                                    <TravelCard key={destination._id} destination={destination}/>
                                ))
                          

                        }


                        

                    </div>


                    <div>
                        {/* filter */}
                        <div className=" flex flex-col items-center justify-center  p-6 ">
                            <h2 className="mb-4 text-lg font-semibold text-gray-800">Select Price</h2>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                value={value}
                                onChange={(e) => setValue(Number(e.target.value))}
                                className="w-64 appearance-none rounded-lg bg-gray-200 accent-blue-600"
                            />
                            <div className="mt-3 text-sm text-gray-600">Price ${value}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Travelling




















