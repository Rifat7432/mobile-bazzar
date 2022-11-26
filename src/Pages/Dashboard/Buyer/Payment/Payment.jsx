import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
const Payment = () => {
  const data = useLoaderData();
  const { productId, productName, productPrice } = data;
  console.log(data)
  return (
    <div>
      <div>
        <p className="text-3xl">Payment for {productName}</p>
        <p className="text-xl">
          Please pay <strong>{productPrice} tk</strong> for {productName}
        </p>
      </div>
      <div className="my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
