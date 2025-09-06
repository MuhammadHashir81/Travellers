import { Router } from 'express'
import { verifyToken } from '../Middleware/middleware.js'
import { userSpecificBooking } from '../Controllers/Userbooking.controller.js'

export const userBookingRouter = Router()


userBookingRouter.get('/booking',verifyToken,userSpecificBooking)