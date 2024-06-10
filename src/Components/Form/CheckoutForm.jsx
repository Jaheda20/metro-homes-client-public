import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const CheckoutForm = ({ offer }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        if (offer?.amount && offer?.amount > 1) {
            axiosSecure.post('/create-payment-intent', { price: offer?.amount })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
    }, [axiosSecure, offer?.amount])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
            setProcessing(false)
            return

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                const paymentInfo = {
                    ...offer,
                    email: user.email,
                    propertyId: offer?._id,
                    price: offer?.amount,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    status: "Accepted"

                }
                delete paymentInfo._id
                console.log(paymentInfo)
                try {
                    const paymentResponse = await axiosSecure.post('/payments', paymentInfo)
                    console.log(paymentResponse.data)
                    const updatedResponse = await axiosSecure.patch(`/offers/status/${offer?._id}`, {status: 'Bought'})
                    console.log(updatedResponse)
                    toast.success('Thank you for your Payment')
                    navigate('/dashboard/propertyBought')
                                       
                }

                catch (err) {
                    console.log(err)
                }
            }
        }
        setProcessing(false)


    };

    return (

        <>
            {' '}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-around w-5/6 my-4">
                    <button className='btn '>Cancel</button>
                    <button className='btn bg-blue-700 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                        {processing ? (
                            <ImSpinner9 className='animate-spin m-auto text-blue-700' size={24} />
                        ) : (
                            `Pay ${offer?.amount}`
                        )}

                    </button>


                </div>

            </form>

            {cardError && <p className='text-red-700'>{cardError}</p>}

        </>

    );
};



export default CheckoutForm;