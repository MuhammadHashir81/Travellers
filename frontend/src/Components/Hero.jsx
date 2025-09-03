import React from 'react'

const Hero = () => {
  
  return (
    <div className='' >
        <div className=' relative flex flex-col justify-center  bg-[url("https://images.unsplash.com/photo-1682685796002-e05458d61f07?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen bg-cover '>
        <div className='absolute inset-0 h-full    bg-black opacity-60'></div>
            <div className='w-[600px] z-20 m-auto '>
                <p className='text-white text-lg font-primary '>Best destinations around the world</p>
            <h1 className='text-white  text-6xl font-semibold  font-primary'>Travel, enjoy and live a new live with Travellers</h1>
            <p className="lorem text-white font-primary mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta molestias ipsum tempore, aliquam natus exercitationem molestiae inventore quia minima illum voluptatum nostrum omnis qui neque aut ab suscipit ullam nesciunt!</p>
            </div>

        </div>
    </div>
  )
}

export default Hero