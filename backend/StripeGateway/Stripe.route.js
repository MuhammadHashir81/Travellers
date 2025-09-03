import { Router } from "express";
import { handlePostPayment, stripePayment } from "./Stripe.controllers.js";
import bodyParser from "body-parser";
export const stripeRouter = Router()

stripeRouter.post('/check-out/:price/:destination',stripePayment)
stripeRouter.post('/webhook' ,bodyParser.raw({type: 'application/json'}),handlePostPayment)