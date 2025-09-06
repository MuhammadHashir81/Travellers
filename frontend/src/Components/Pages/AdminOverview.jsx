import {useEffect} from 'react'
import AdminCard from './AdminCard'
import { useContext } from 'react'

import { ManageDestinationContext } from '../ContextApi/ManageDestinationsProvider'
const AdminOverview = () => {
    const {adminDestinations,setAdminDestinations,getAllDestinations} = useContext(ManageDestinationContext)

    useEffect(() => {
       getAllDestinations()
    }, [])
    
    
  return (
    <div>
        <h1 className='font-secondary text-5xl'>Overview</h1>
        {   

            adminDestinations.map((destination)=>(
                <AdminCard destination={destination} showButton={false}/>
            ))
        }
    </div>
  )
}

export default AdminOverview