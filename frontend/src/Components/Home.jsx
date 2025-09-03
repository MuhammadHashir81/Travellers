import React, { useEffect } from 'react'
import Hero from './Hero'
import BestDestinations from './BestDestinations'
import BookYourDestination from './BookYourDestination'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestDestinations />
      <BookYourDestination />
    </div>
  )
}

export default Home
