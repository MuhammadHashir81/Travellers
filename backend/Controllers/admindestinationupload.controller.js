import { UploadDestinations } from "../Model/UploadDestination.Schema.js";
import { body, validationResult } from 'express-validator'


export const destinationUploadValidationRules = [
    body('destination').notEmpty().withMessage('please enter destination').bail().isLength({ min: 2 }).withMessage('password must be 3 characters long').bail().isLength({ max: 50 }).withMessage('descripton must not be greater than 50 characters '),
    body('price').notEmpty().withMessage('please enter price').bail().isNumeric().withMessage('price must be a number').bail().isFloat({ min: 0 }).withMessage('price must be greater than or equal to 0'),
]

export const uploadDestination = async (req, res) => {
    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const error = errors.array().map(error => `${error.msg}`)
            console.log(error)
            res.status(400).json({ error })

            return
        }

        const { destination,price } = req.body;
        let { services } = req.body;
        const image = req.file;
        console.log(image)

        if (!image) {
            return res.status(400).json({ error: "Image is required" });
        }

        if (typeof services === "string") {
            try {
                services = JSON.parse(services);
            } catch (err) {
                return res.status(400).json({ error: "Invalid services format" });
            }
        }

        const uploadDestination = await UploadDestinations.create({
            destination,
            price,
            services,
            image:image.filename
        });

        res.status(200).json({ success: "Destination uploaded successfully", uploadDestination });
        console.log(uploadDestination);


    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}





// update destinations

export const updateDestination = async (req,res)=>{
    try {
    const {id} = req.params
    const image = req.file
    let {services} = req.body
    const {destination,price} = req.body

    if (typeof services === "string") {
        try {
           services =  JSON.parse(services)
            
        } catch (error) {
            res.status(400).json({error:"Invalid services format"})
            
        }
        
    }


    let updatedData = {}
    if (image) updatedData.image = image.filename
    if (services) updatedData.services = services
    if (destination) updatedData.destination = destination
    if (price) updatedData.price = price

    const updateDest = await UploadDestinations.findByIdAndUpdate(id,{ $set: {...updatedData} },{new:true},{ runValidators: true})
    res.status(200).json({success:"Destination updated successfully ", updateDest})
    } catch (error) {
     res.status(500).json({error:error.message})   
    }

}
 


// delete destination




export const deleteDestination = async (req,res)=>{
    try {
    const {id} = req.params

    const deleteDest = await UploadDestinations.findByIdAndDelete({_id:id})
    res.status(200).json({success:"Destination deleted successfully ", deleteDest})
    } catch (error) {
     res.status(500).json({error:error})   
     console.log({error:error})
    }

}
 

