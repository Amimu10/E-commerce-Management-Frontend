import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useSubscription from "../../../Hooks/useSubscription";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const Subscription = () => {
    const [subscription] = useSubscription();  
    const  axiosSecure = useAxiosSecure(); 
    const { user } = useAuth();
  
    const plans = [
      {
        name: 'Basic Plan',
        price: 10,
        description: 'Unlock a world of possibilities with our Basic Plan! Enjoy an increased limit of 200.',
      },
      {
        name: 'Standard Plan',
        price: 20,
        description: 'Take your experience to the next level! Upgrade to our Standard Plan for a generous limit of 450.',
      },
      {
        name: 'Premium Plan',
        price: 50,
        description: 'Unleash the full potential! Our Premium Plan offers an extensive limit of 1500 for the ultimate experience.',
      },
    ];
  
    const handleSubscription = async (plan) => {
        const productLimit = {
          'Basic Plan': 200,
          'Standard Plan': 450,
          'Premium Plan': 1500,
        };
      
        try {
          const response = await axiosSecure.post("subscription", {
            name: user?.name, 
            email: user?.email, 
            subscriptionDate: new Date().toISOString(), 
            plan: plan.name,
            price: plan.price,
            productLimit: productLimit[plan.name],
          });
      
          if (response.data.insertedId) {
            toast.success(`${plan.name} !`, { duration: 3000 });
          }
        } catch (error) {
          console.error('Error subscribing:', error);
          toast.error('Subscription failed. Please try again.', { duration: 3000 });
        }
      };
      


return (
  <div>
     <p className=" text-gray-600 font-inter text-3xl dark:text-gray-400 m-8">
      Elevate your shop management with our subscription plans
  </p>
 
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto px-5 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.name}</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <p className="my-4 text-gray-600 dark:text-gray-400">{plan.description}</p>
          <Link to="/dashboard/payment">     
          <button
              type="button"
              onClick={() => handleSubscription(plan)}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Upgrade Now
            </button>
          </Link>
          </div>
        ))}
      </div>
  </div>
    );
};

export default Subscription;