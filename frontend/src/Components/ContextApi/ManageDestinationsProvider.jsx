import { createContext,useEffect,useState } from "react";
import toast from 'react-hot-toast';
import { useContext } from "react";

export const ManageDestinationContext = createContext();



const ManageDestinationsProvider = ({ children }) => {
    const [destinations, setDestinations] = useState([]);
    const [adminDestinations,setAdminDestinations] = useState([])



    const baseUrl = "http://localhost:3000";




    // get all destinations 

    const getAllDestinations = async () => {

            const response = await fetch(`${baseUrl}/api/destinations/get`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                
            })


        const data = await response.json();
        if (response.ok) {
            setAdminDestinations(data.destinations);
        } else {
            console.error("Error uploading destination:", data.error);
        }
    }




      

    // Function to upload destination   

    const uploadDestination = async (formData) => {
        const response = await fetch(`${baseUrl}/api/destination/upload`, {
            method: "POST",
            body: formData
        })

        const data = await response.json();
        if (response.ok) {
            console.log("Destination uploaded successfully:", data.success);
            toast.success(data.success);
        } else {
            console.error("Error uploading destination:", data.error);
            toast.error(data.error);
        }
    }


    // update destinations 

    const handleUpdateDestination = async (formData, id) => {
        const response = await fetch(`${baseUrl}/api/destination/update/${id}`, {
            method: "PUT",
            body: formData
        })

        const data = await response.json();

        if (response.ok) {
            console.log(data.success)
            toast.success(data.success);
            getAllDestinations()

        } else {
            console.error("Error uploading destination:", data.error);
            toast.error(data.error);
            console.log(data.error)

        }
    }


    // delete destination 


    const deleteDestination = async (id) => {
        const response = await fetch(`${baseUrl}/api/destination/delete/${id}`, {
            method: "DELETE",
        })

        const data = await response.json();

        if (response.ok) {
            console.log(data.success)
            toast.success(data.success);
            getAllDestinations()

        } else {
            toast.error(data.error);
            console.log(data.error)

        }
    }





    return (

        <ManageDestinationContext.Provider value={{ uploadDestination, handleUpdateDestination,getAllDestinations,destinations,adminDestinations,setAdminDestinations,deleteDestination }}>
            {children}
        </ManageDestinationContext.Provider>
    );
};

export default ManageDestinationsProvider;