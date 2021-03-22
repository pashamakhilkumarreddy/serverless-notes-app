import stripePackage from 'stripe';
import handler from './libs/handler-lib';
import { calculateCost } from './libs/billing-lib';

export const main = handler(async (event, context) => {
  try {
    const { storage, source } = JSON.parse(event.body);
    const amount = calculateCost(storage);
    const description = 'Notes charge';

    const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
    await stripe.charges.create({
      source,
      amount,
      description,
      currency: 'usd',
      shipping: {
        name: 'Dua Lipa',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
    });
    return {
      status: true,
    };
  } catch (err) {
    console.error(err);
  }
});
