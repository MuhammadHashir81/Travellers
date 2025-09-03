import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <AdminDashboard/>
        <div className='py-24 px-5'>
        <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout