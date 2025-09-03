import mongoose from "mongoose";
const {Schema} = mongoose

const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,

    }

})

export const Admin = mongoose.model('admin',adminSchema)
