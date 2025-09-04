import mongoose from "mongoose";
const {Schema} = mongoose


const orderSchema = new Schema({

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
            name:String,
            quantity:Number,
            price:Number

        }

    ],
    totalAmount:Number


})


export const Order = mongoose.model("Order",orderSchema)