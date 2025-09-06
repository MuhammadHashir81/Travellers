import Stripe from "stripe"
import dotenv from "dotenv";
import express from 'express'
import { Order } from "../Model/Stripe.Schema.js";
import { User } from "../Model/User.Schema.js";

const app = express()

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const YOUR_DOMAIN = 'http://localhost:5173'


export const stripePayment = async (req, res) => {
  const id = req.userId

  const findUser = await User.findById(id)
  const findUserEmail = findUser.email

  if (!findUserEmail) {
    res.status(404).json({ error: "some error occured" })

  }

  const { price, destination } = req.params; // price from frontend
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: ` ${destination}`, // can be dynamic too
            },
            unit_amount: price * 100, // Stripe expects amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: findUserEmail,
      success_url: `${YOUR_DOMAIN}/payment-success`,
      cancel_url: `${YOUR_DOMAIN}/payment-error`,

      metadata: {
        userId: id
      }
    });

    res.json({ url: session.url, session }); // send URL back to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
    console.log(error.message)
  }
};




// Webhook endpoint
export const handlePostPayment = async (req, res) => {
  const signature = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_ENDPOINT // make sure this is set correctly
    );
  } catch (err) {
    return res.sendStatus(400);
  }


  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // finding a specific user to relate his booked destinaitons 

    const userId = session.metadata.userId

    const sessionId = session.id
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 5 });
    const items = lineItems.data.map(item => {

      return {
        description: item.description,
        price: item.price.unit_amount 
      }
    });

    const customerEmail = session.customer_details.email
    const customerName = session.customer_details.name

    const createUser = await Order.create({
      id:userId,
      sessionId: sessionId,
      customerName: customerName,
      customerEmail: customerEmail,
      items,
    })

    res.status(200).send("createUser")

  }

};

