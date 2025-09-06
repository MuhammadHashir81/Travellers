import { Order } from "../Model/Stripe.Schema.js"

export const allBookings = async(req,res)=>{
    try {
        const getAllBookings = await Order.find()
        console.log(getAllBookings)
        res.status(200).json({success:getAllBookings})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
        
    }


}