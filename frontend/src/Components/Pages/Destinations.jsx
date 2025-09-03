import React from 'react'
import Travelling from './Travelling'

const Destinations = () => {
  return (
    <div>
        <div className='relative flex items-center justify-center'>
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='' />
            <div className='absolute inset-0  bg-black opacity-55' ></div>
               <div className='absolute w-[550px] flex flex-col justify-center items-center gap-2'>
                <p className='bg-green-300/20 w-fit px-4 text-white rounded-full py-1 font-primary' >Our Packages</p>
            <h2 className='  text-white text-7xl  font-quaternary'>Discover Your Perfect Adventure</h2>
               </div>

        </div>
        <Travelling/>
    </div>
  )
}

export default Destinations