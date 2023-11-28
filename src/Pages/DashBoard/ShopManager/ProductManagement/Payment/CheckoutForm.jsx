import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import useSubscription from "../../../../../Hooks/useSubscription";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [subscription, , refetch] = useSubscription();
  console.log("subscription", subscription);
  // const totalPrice = subscription.reduce((total, item)=> total + item.price, 0);
  // const navigate = useNavigate();
  // const price = subscription.length > 0 ? subscription[0].price : 0;
  const totalPrice = subscription.reduce((total, item)=> total + item.price, 0);
  // const navigate = useNavigate();  
   
  useEffect( () => { 
    if(totalPrice > 0){   
      axiosSecure.post("/create-payment-intent", {price: totalPrice})  
      .then(res => {  
          console.log(res.data.clientSecret); 
          setClientSecret(res.data.clientSecret); 
      })
    }
  }, [axiosSecure, totalPrice]) 


  // useEffect( () => {
  //   if(price > 0){
  //     axiosSecure.post("/create-payment-intent", {price: subscription.price})
  //     .then(res => {
  //         console.log(res.data.clientSecret);
  //         setClientSecret(res.data.clientSecret);
  //     })
  //   }
  // }, [axiosSecure, price])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError(" ");
      console.log("[PaymentMethod]", paymentMethod);
    }
    // Additional logic for handling the card and submitting to Stripe
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment success", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log("transaction id", paymentIntent.id);

        //  now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,   
          date: new Date(),  
          cartIds: subscription.map(item => item._id), 
          product_limit: subscription.map(item => item.productLimit,),
          status: "pending",   
        };
        const res = await axiosSecure.post("/payments", payment);
        refetch();
        if (res.data.paymentResult?.insertedId) {
          toast.success("Payment Successfull !", { duration: 3000 });
          // navigate("/dashboard/paymentHistory");
        }
        console.log("payment success", res.data);
      }
    }
  };

  //   confirm card payment

  return (
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
      <div className="text-center my-12">
        <button
          className="btn btn-primary text-white font-inter w-[412px] p-2 rounded-md"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
      <p className="text-2xl text-red-700 font-inter text-center">{error}</p>
      {transactionId && (
        <p className="text-green-700">Your transaction id : {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
