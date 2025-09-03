import React, { useEffect, useState } from 'react'

const BestDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('destinations.json');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='px-32 my-52' >
      <h2 className='text-5xl font-primary text-center text-gray-900 font-bold'>
        Your Next Destination
      </h2>

      <div className='flex mt-20 flex-wrap gap-10 justify-center items-center'>
        {destinations.map((single, index) => (
          <div
            key={index}
            className='rounded-md relative w-[500px] cursor-pointer hover:scale-105 transition-all duration-300'
               
          >
            <img src={single.image} alt={single.destination} className='rounded-md' />
            <div className='absolute inset-0 flex items-center justify-center bg-black opacity-55 rounded-md' ></div>
            <h2 className='absolute inset-0 flex items-center justify-center text-white font-primary text-5xl font-semibold'>
              {single.destination}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestDestinations
