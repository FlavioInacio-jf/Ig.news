import Stripe from 'stripe';


export const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: '2020-08-27',
  appInfo: {
    name:'Ig.news',
    version: '0.1.0'
  }
})