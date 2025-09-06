import { Order } from "../Model/Stripe.Schema.js"

export const userSpecificBooking = async(req,res)=>{
    const id = req.userId
    try {
        const fetchBookings = await Order.find({id:id})
        res.status(200).json({fetchBookings})
        console.log(fetchBookings)
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error.message)
        
    }

}