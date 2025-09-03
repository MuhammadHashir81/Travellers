import React from 'react'
import { useContext,useEffect } from 'react'
import { AdminContext } from '../ContextApi/AdminProvider'
import { ManageDestinationContext } from '../ContextApi/ManageDestinationsProvider'
import AdminCard from './AdminCard'
import { Toaster } from 'react-hot-toast'
const AdminManageDestinations = () => {
    const { adminDestinations, setAdminDestinations, getAllDestinations } = useContext(ManageDestinationContext)
    console.log(adminDestinations)

    useEffect(() => {
        getAllDestinations()
    }, [])



    return (
        <div>
            <Toaster/>
              <h1 className='font-secondary text-5xl'>Manage Destinations</h1>
        {   

            adminDestinations.map((destination)=>(
                <AdminCard destination={destination} showButton={true}/>
            ))
        }

        </div>

    )
}

export default AdminManageDestinations