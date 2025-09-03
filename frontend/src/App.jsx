import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { Routes, Route, Navigate } from "react-router";
import Home from './Components/Home'
import Signup from './Components/Signup'
import Layout from './Components/Layout'
import Login from './Components/Login'
import Destinations from './Components/Pages/Destinations'
import UploadDestinations from './Components/Pages/UploadDestinations'
import Landing from './Components/Landing'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/Pages/AdminDashboard'
import AdminOverview from './Components/Pages/AdminOverview'
import AdminLayout from './Components/Pages/AdminLayout'
import AdminManageDestinations from './Components/Pages/AdminManageDestinations'
function App() {

  const isAuthenticated = () => {
    return !!localStorage.getItem('userToken')
  } 

  const ProtectRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to='/' replace />
    }

    return children
  }


  const PublicRoute = ({ children }) => {
    if (isAuthenticated()) {
      return <Navigate to='/home' replace />
    }
    return children

  }


  // protect admin route 


  const isAdminAuthenticated = ()=>{
    return !!localStorage.getItem('adminToken')
  }

  const AdminProtectedRoute = ({children})=>{
     if (isAdminAuthenticated()) {

      return <Navigate to='/admin-dashboard'/>
      
     }

     return children

  }


  const AdminPublicRoute = ({children})=>{
    if (!isAdminAuthenticated()) {
     return <Navigate to='/admin-login'/>
    }
    return children
  }

  return (

    <div className=''>

      <Routes>

        <Route path='/' element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin-login' element={
          <AdminProtectedRoute>
            <AdminLogin />
          </AdminProtectedRoute>
          } />

        



        <Route path='/admin-dashboard' element={
          <AdminPublicRoute>
          <AdminLayout />
          </AdminPublicRoute>
          }>
          <Route index element={<AdminOverview />} />
          <Route path='manage-destinations' element={<AdminManageDestinations />} />
          <Route path='upload-destinations' element={<UploadDestinations />} />

        </Route>


        <Route path='/home' element={
          <ProtectRoute>
            <Layout />
          </ProtectRoute>}>
          <Route index element={<Home />} />
          <Route path='destinations' element={<Destinations />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App


