import React, { useEffect, useState } from 'react'
import { FaHotel } from "react-icons/fa6";
import { SiMentorcruise } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { FaPlane } from 'react-icons/fa6';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useContext } from 'react';
import { ManageDestinationContext } from '../ContextApi/ManageDestinationsProvider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const AdminCard = ({ destination, showButton = true }) => {
    const { handleUpdateDestination,getAllDestinations,deleteDestination } = useContext(ManageDestinationContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [updateDestination, setUpdateDestination] = useState("")
    const [updatePrice, setUpdatePrice] = useState("")
    const [updateServices, setUpdateServices] = useState([])
    const [updateImage, setUpdateImage] = useState("")
    const [updateId, setUpdateId] = useState(null)


    


    const handleChange = (e) => {
        const file = e.target.files[0]
        if (!file) {
            alert("Please select an image file");
            return;
        }
        else {
            setUpdateImage(file);
        }
        console.log(file)
    }

    // handle services

    const handleServices = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setUpdateServices((prev) => (
                [...prev, value]
            ))
        }
        else{
            setUpdateServices(updateServices.filter((s) => s !== value))
        }


    }

    // handle update

    const handleUpdate = (id) => {
        handleOpen()
        console.log(id)
        setUpdateId(id)
    }


    // handledelete

    const handleDelete = (id) => {
        deleteDestination(id)
    }

    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('destination', updateDestination)
        formData.append('image', updateImage)
        formData.append('services', JSON.stringify(updateServices))
        formData.append('price', updatePrice)
        handleUpdateDestination(formData, updateId)
    }


    // handle update




    const selectedIcons = {
        hotel: <FaHotel className='text-2xl text-gray-600' />,
        cruises: <SiMentorcruise className='text-2xl text-gray-600' />,
        car: <FaCar className='text-2xl text-gray-600' />,
        flights: <FaPlane className='text-2xl text-gray-600' />
    }
    return (
        <div>
            <div className='flex  gap-10 items-start py-10 shadow-lg'>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>

                            <h1 className='text-5xl font-primary font-bold my-10'>Update Destination</h1>

                            <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-4'>

                                    <input
                                        type="text"
                                        name='destination'
                                        placeholder='Pakistan,America,Turkey'
                                        className='border-2 border-gray-300 rounded-md px-4 py-2  mb-4'
                                        value={updateDestination}
                                        onChange={(e) => setUpdateDestination(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        name='number'
                                        placeholder='$price'
                                        className='border-2 border-gray-300 rounded-md px-4 py-2  mb-4'
                                        value={updatePrice}
                                        onChange={(e) => setUpdatePrice(e.target.value)}

                                    />

                                    <input type="file" accept='image/*' name='image'
                                        onChange={handleChange}
                                    />

                                </div>

                                {/* services */}
                                <div className='flex gap-5'>
                                    <label>
                                        <input type="checkbox" value="Hotel" onChange={handleServices} /> Hotel
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Car" onChange={handleServices} /> Car
                                    </label>
                                    <label>
                                        <input type="checkbox" value="Flights" onChange={handleServices} /> Flights
                                    </label>

                                    <label>
                                        <input type="checkbox" value="Cruises" onChange={handleServices} /> Cruises
                                    </label>
                                </div>

                                <button type="submit" className='bg-green-500 text-white font-primary py-3 cursor-pointer rounded-md' >update</button>

                            </form>
                        </Box>
                    </Fade>
                </Modal>


                {/* travel card  */}
                <img src={`http://localhost:3000/uploads/${destination.image}`} alt="" className='w-[500px] h-[250px] object-cover rounded-xl' />
                <div>

                    <span className='bg-green-300/20 px-9 py-2 rounded-full text-green-600 '>{destination.destination}</span>
                    <div className='flex flex-wrap gap-2 mt-7 text-gray-600 font-primary items-center'>
                        {/* <p>{destination.services}</p> */}

                        {
                            destination.services.map((service) => (
                                <div key={service} className='flex items-center gap-2 mt-2'>
                                    <p>{selectedIcons[service.toLowerCase()]}</p>
                                    <p>{service}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='mt-16'>
                        <p className='font-primary font-semibold text-lg'>${destination.price}/day</p>
                        {showButton &&
                            <div className='flex space-x-4 my-2'>

                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
                                    onClick={() => handleUpdate(destination._id)}
                                >
                                    Update
                                </button>

                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer" onClick={() => handleDelete(destination._id)}>
                                    delete
                                </button>
                            </div>
                        }

                    </div>

                </div>

                <div>


                </div>

            </div>

        </div>
    )
}

export default AdminCard









