import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'; 
import CheckoutForm from './CheckoutForm'; 

// TODO: add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK); 
const Payment = () => {  
  return ( 
    <div>
      <div className="text-center my-8">
        <h3 className="text-[#151515] font-inter lg:text-[40px] text-[32px] font-normal"> 
          PAYMENT  
        </h3> 
      </div> 
        <div>
            <Elements stripe={stripePromise}> 
              <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
  );
};

export default Payment;