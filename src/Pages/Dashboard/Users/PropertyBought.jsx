import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";
import { Helmet } from "react-helmet-async";

const PropertyBought = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {payments} = usePayment();

    const { data: offers = [], isLoading, refetch } = useQuery({
        queryKey: ['offers', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/offers/${user?.email}`)
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )


    return (
        <div>
            <Helmet>
                <title>Metro Homes || My Bought Property</title>
            </Helmet>
            <h1 className="text-2xl font-semibold my-10">Bought Properties : ({offers.length})</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    offers.map(offer => <div key={offer._id}>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="relative">
                            <img src={offer.propertyImage} alt="" className=" object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <p className="dark:text-gray-800 absolute bg-white top-6 right-6 px-4 py-2 font-bold bg-opacity-90 rounded-3xl">{offer.status}</p>

                            </div>
                            
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold tracking-wide">{offer.title}</h2>
                                    <p className="dark:text-gray-800">{offer.location}</p>
                                    <p className="dark:text-gray-800">Agent: {offer.agentName}</p>
                                    <p className="dark:text-gray-800 font-semibold">Offered: ${offer.amount}</p>
                                    
                                </div>
                                <div>
                                    {
                                        offer?.status === 'Bought' && (<p> Your Transaction ID: <span className="text-blue-700">{payments.find(p => p.propertyId === offer._id)?.transactionId}</span></p>) } 
                                        {

                                        offer?.status === 'Accepted' ?
                                        <Link to="/dashboard/payment" state={{offer}}>
                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white bg-blue-700">Pay Now</button>                                       
                                        </Link> 
                                         
                                        :
                                        ""
                                    }
                                </div>

                               
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PropertyBought;