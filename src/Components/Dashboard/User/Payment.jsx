import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../Form/CheckoutForm';
import { useLocation } from 'react-router-dom';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
    const location = useLocation();
    const {offer} = location.state || {}

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h2 className='text-2xl font-semibold my-8'>Make your Payment</h2>

            <div className='w-full max-w-md p-10 bg-white shadow-lg rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm offer={offer}
                    ></CheckoutForm>
                </Elements>

            </div>



        </div>
    );
};

export default Payment;