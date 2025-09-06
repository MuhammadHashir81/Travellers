import express from 'express'
import cors from 'cors' 
import mongoose from 'mongoose'
import {authRouter} from './Routes/auth.route.js'
import cookieParser from 'cookie-parser'
import { getDestinationsRouter } from './Routes/getdestinations.route.js'
import dotenv, { parse } from 'dotenv'
import { adminRouter } from './Routes/admin.route.js'
import { adminUploadRouter } from './Routes/admindestinationupload.route.js'
import { stripeRouter } from './StripeGateway/Stripe.route.js'
import { adminBookingRouter } from './Routes/adminBookings.route.js'
import { yourBookingRouter } from './Routes/Adminorders.route.js'
import { userBookingRouter } from './Routes/Userbooking.route.js'
const app = express()
const port = 3000

try {
  await mongoose.connect('mongodb://127.0.0.1:27017/travel');
} catch (error) {
  handleError(error);
}



app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(cookieParser())

app.use('/payment',stripeRouter)


app.use(express.json())

app.use("/uploads", express.static("uploads"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.use('/api/auth', authRouter)
app.use('/api/destination', adminUploadRouter)
app.use('/api/destinations', getDestinationsRouter)
app.use('/api/auth',adminRouter)
app.use('/bookings',adminBookingRouter)
app.use('/your',yourBookingRouter)
app.use('/user',userBookingRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





