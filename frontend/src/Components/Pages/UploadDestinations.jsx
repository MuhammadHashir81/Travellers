import React, { useState } from 'react'
import ImageUploader from '../ImageUploader'
import { useContext } from 'react';
import { ManageDestinationContext } from '../ContextApi/ManageDestinationsProvider';
import { Toaster } from 'react-hot-toast';

const UploadDestinations = () => {
    const {uploadDestination} = useContext(ManageDestinationContext)

    const [image, setImage] = useState(null);
    const [services, setServices] = useState([]);
    const [destination, setDestination] = useState("");
    const [numb,setNumb] = useState("");
    


    //   change services based on checkbox selection
    const handleServiceChange = (e) => {
        const { value,   checked } = e.target;
        if (checked) {
            setServices([...services, value]);
        } else {
            setServices(services.filter((s) => s !== value));
        }
    }



    const handleChange = (e) => {
        const file = e.target.files[0]
        if (!file) {
            alert("Please select an image file");
            return;
        }
        else{
            setImage(file);
        }
        console.log(file)
    }



    // form data 

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('destination', destination);
        formData.append('services', JSON.stringify(services));
        formData.append('price', numb);
        uploadDestination(formData);

        setImage(null);
        setDestination("");
        setServices([]);
        setNumb("");

    }
        
    // handle form submission
    


    return (


        <div className='px-32 min-h-screen py-10'>
            <Toaster />
            <h1 className='text-5xl font-primary font-bold my-10'>Upload Destinations</h1>
               

            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>

                        <input
                            type="text"
                            name='destination'
                            placeholder='Pakistan,America,Turkey'
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className='border-2 border-gray-300 rounded-md px-4 py-2  mb-4'
                        />
                        <input 
                        type="number"
                        name='number'
                        placeholder='$price'  
                        className='border-2 border-gray-300 rounded-md px-4 py-2  mb-4'
                        value={numb}
                        onChange={(e) => setNumb(e.target.value)}

                        />

                        <input type="file" accept='image/*' onChange={handleChange} name='image' />

                    </div>

                    {/* services */}
                    <div className='flex gap-5'>
                        <label>
                            <input type="checkbox" value="Hotel" onChange={handleServiceChange} /> Hotel
                        </label>
                        <label>
                            <input type="checkbox" value="Car" onChange={handleServiceChange} /> Car
                        </label>
                        <label>
                            <input type="checkbox" value="Flights" onChange={handleServiceChange} /> Flights
                        </label>
                        
                        <label>
                            <input type="checkbox" value="Cruises" onChange={handleServiceChange} /> Cruises
                        </label>
                    </div>

                    <button type="submit" className='bg-green-500 text-white font-primary py-3 cursor-pointer rounded-md'>upload</button>

                </form>
            </div>
        </div>
    )
}

export default UploadDestinations









