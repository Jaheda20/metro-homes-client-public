import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PropertyBought = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: offers = [], isLoading, refetch } = useQuery({
        queryKey: ['offers', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/offers/${user?.email}`)
            return data
        }
    })



    return (
        <div>
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
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PropertyBought;