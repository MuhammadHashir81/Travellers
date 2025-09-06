import { Router } from "express";
import { handlePostPayment, stripePayment } from "./Stripe.controllers.js";
import bodyParser from "body-parser";
import { verifyToken } from "../Middleware/middleware.js";
export const stripeRouter = Router()

stripeRouter.post('/check-out/:price/:destination',  verifyToken,  stripePayment)
stripeRouter.post('/webhook' ,   bodyParser.raw({type: 'application/json'}),  handlePostPayment)