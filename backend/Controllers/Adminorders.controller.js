import { Order } from "../Model/Stripe.Schema.js"
export const yourBooking = async(req,res)=>{
    try {
        const bookings = await Order.find()
        res.status(200).json({success:bookings})
    } catch (error) {
        res.status(500).json({error:"Internal server error "})
        
    }

}