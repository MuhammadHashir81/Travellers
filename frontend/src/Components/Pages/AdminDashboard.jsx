import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { RxDashboard } from "react-icons/rx";
import { FaGlobeAmericas } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GoUpload } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { useContext } from 'react';
import { AdminContext } from '../ContextApi/AdminProvider';
import { Toaster } from 'react-hot-toast';



const AdminDashboard = () => {

  const {adminLogOut} = useContext(AdminContext)

  const handleLogOut = ()=>{
    adminLogOut()
    console.log("hashir")
  }
  return (
    <div>
      <Toaster/>
      <h1 className=" px-2 text-5xl font-primary my-2">Travellers</h1>
      <Sidebar className=' '>
        <Menu className='min-h-screen py-4'>



          <MenuItem
            component={<NavLink to="/admin-dashboard" />}
          >
            <div className="flex items-center space-x-1.5">

              <RxDashboard /> <span>Dashboard</span>
            </div>
          </MenuItem>

          <MenuItem
            component={<NavLink to="manage-destinations" />}
          >

            <div className="flex items-center space-x-1.5">

              <FaGlobeAmericas /> <span>Manage Destinations</span>
            </div>
          </MenuItem>


          <MenuItem
            component={<NavLink to="upload-destinations" />}
          >
            <div className="flex items-center space-x-1.5">

              <GoUpload />
              <span>Upload Destinations</span>
            </div>
          </MenuItem>


          <MenuItem>
            <div className="flex items-center space-x-1.5">
              <button onClick={handleLogOut} className='flex items-center cursor-pointer'>

              <MdLogout/>  Logout</button>
            </div>
          </MenuItem>


        </Menu>
      </Sidebar>

    </div>
  )
}

export default AdminDashboard