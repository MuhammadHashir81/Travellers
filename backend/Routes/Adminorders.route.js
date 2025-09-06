import  express from 'express'
import { Router } from 'express'
import { yourBooking } from '../Controllers/Adminorders.controller.js'
import { verifyToken } from '../Middleware/middleware.js'
import { verifyAdmin } from '../Middleware/adminMiddleware.js'

export const yourBookingRouter = Router()

yourBookingRouter.get('/booking', verifyAdmin,  yourBooking)