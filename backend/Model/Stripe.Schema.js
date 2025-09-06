import mongoose from "mongoose";
const {Schema} = mongoose


const orderSchema = new Schema({

    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    sessionId : {
     type:String
    },
    customerName:{
        type:String
    },
    customerEmail:{
        type:String
    },
    items:[
        {
            description:String,
            price:Number

        }

    ],


})


export const Order = mongoose.model("Order",orderSchema)