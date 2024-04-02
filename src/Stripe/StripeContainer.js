import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm.js";

const PUBLIC_KEY = "pk_test_51P1AeP07ZBZnvwoAx0Q7zIwRO5pgMi1ChuDRtK3Kay5c76WHlkTdnXyMWF9zQmQv61z3sTiLdFXGAQYMVZwpqofl00kEtYw78Y";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;