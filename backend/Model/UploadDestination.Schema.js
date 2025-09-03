import mongoose from "mongoose";
const {Schema} = mongoose

const destinationSchema = new Schema({
    destination:{
        type:String,
        required:[true,"please enter your destination"],
        minLength:[2,"your name should consist atleast 2 letters"],
        maxLength:[50,'your name cannot consist more than 50 letters']
    },
    
    services:{
        type:[String],
        require:true,
    },

    price:{
        type:Number,
        required:true,
        min:0   
    },

    image: {
    type: String, 
    required: true,
  },

})

export const UploadDestinations = mongoose.model('destination',destinationSchema)
