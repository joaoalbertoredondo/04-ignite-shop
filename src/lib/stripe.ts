import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51PqDGII8jVw9hPRImSv8U1kWrwyQrR6FyRYRl4nDzESFq7RmnyyrLD08sNsBOEiFzN1vGBpJmoaf1pFIJxekwOAj009ZTwqi4o",
  {
    apiVersion: "2024-06-20",
    stripeAccount: "acct_1PqDGII8jVw9hPRI",
    appInfo: {
      name: "Ignite Shop",
    },
  }
);
