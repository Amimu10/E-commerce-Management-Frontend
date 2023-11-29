import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";


const UserCheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth(); 
  const stripe = useStripe(); 
  const elements = useElements(); 
  const axiosSecure = useAxiosSecure();
  const [cart, , refetch] = useCart(); 
  console.log("cart", cart);
  const totalPrice = cart.reduce((total, item)=> total + item.product_price, 0);
 
  useEffect( () => { 
    if(totalPrice > 0){   
      axiosSecure.post("/create-payment-intent", {price: totalPrice})  
      .then(res => {  
          console.log(res.data.clientSecret); 
          setClientSecret(res.data.clientSecret); 
      })
    }
  }, [axiosSecure, totalPrice]) 


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
        const cartPayment = { 
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,   
          date: new Date(),  
          cartIds: cart.map(item => item._id), 
          status: "pending",    
        };
        const res = await axiosSecure.post("/customerPayments", cartPayment);  
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

export default UserCheckoutForm;
