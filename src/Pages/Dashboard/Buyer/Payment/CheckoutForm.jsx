import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const {
    productId,
    productName,
    productPrice,
    buyerName,
    buyerEmail,
    paid,
    _id
  } = data;
  
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch(
      "http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        toast.error(error.message);
    } 
    setProcessing(true);
    setTransactionId("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });
    if (confirmError) {
        toast.error(confirmError.message);
        setProcessing(false);
    }
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        buyerName,
        productPrice,
        transactionId: paymentIntent.id,
        orderId: _id,
        productId,
        productName,
      };
      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
            setTransactionId(paymentIntent.id);
            toast.success("Your payment completed !");
            setProcessing(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm my-5 myButton"
          type="submit"
          disabled={!stripe || !clientSecret || processing || paid}
        >
          Pay
        </button>
      </form>
      {transactionId !== "" && (
        <p className="font-bold">Your transaction id : {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
