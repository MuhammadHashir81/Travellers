import express from 'express'
import { Router } from 'express'
import { allBookings } from '../Controllers/adminBookings.controller.js'
import { verifyAdmin } from '../Middleware/adminMiddleware.js'


export const adminBookingRouter = Router()

adminBookingRouter.get('/all',  allBookings)