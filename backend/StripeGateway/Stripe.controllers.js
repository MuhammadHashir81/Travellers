import Stripe from "stripe"
import dotenv from "dotenv";
import express from 'express'

const app = express()

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const YOUR_DOMAIN = 'http://localhost:5173'


export const stripePayment = async (req, res) => {
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
      success_url: `${YOUR_DOMAIN}/`,
      cancel_url: `${YOUR_DOMAIN}/`,
    });

    res.json({ url: session.url }); // send URL back to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
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
    console.log(`Webhook signature verification failed:`, err.message);
    return res.sendStatus(400);
  }

  console.log(' Event received:', event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 5 });
    lineItems.data.forEach(item => {
      item.description
      item.quantity
      item.price.unit_amount
    });
    const customerEmail = session.customer_details.email
    const customerName = session.customer_details.name



    console.log(' Checkout session completed:', customerEmail, customerName);
  }

  res.sendStatus(200); // IMPORTANT
};

