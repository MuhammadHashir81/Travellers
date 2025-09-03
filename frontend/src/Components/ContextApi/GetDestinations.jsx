import { createContext,useState } from "react";  

export const GetDestinationsContext = createContext();

const GetDestinationsProvider = ({ children }) => {
    const [destinations, setDestinations] = useState([]);

    
    const baseUrl = "http://localhost:3000";

    // Function to upload destination   

    const getAllDestinations = async () => {
        const response = await fetch(`${baseUrl}/api/destinations/get`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            
        })

        const data = await response.json();
        if (response.ok) {
            console.log("Destination uploaded successfully:", data.destinations[0]);
            setDestinations(data.destinations);
        } else {
            console.error("Error uploading destination:", data.error);
        }
    }

    return (
        <GetDestinationsContext.Provider value={{getAllDestinations,destinations}}>
            {children}
        </GetDestinationsContext.Provider>
    );
}

export default GetDestinationsProvider;