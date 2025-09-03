import { UploadDestinations } from '../Model/UploadDestination.Schema.js';
export const getDestinations = async (req, res) => {
     try { 
        const destinations = await UploadDestinations.find();
        if (!destinations || destinations.length === 0) {
            return res.status(404).json({ error: "No destinations found" });
        }
        else {
            res.status(200).json({ success: "Destinations retrieved successfully", destinations });
        }
        
     } catch (error) {
        res.status(500).json({ error: "Internal server error" });
     }
}