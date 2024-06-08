import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();

    const { data: wishlists = [], isLoading } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/wishlists/${user?.email}`)
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
            <h2 className="text-2xl font-semibold my-10">Added properties: ({wishlists.length})
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    wishlists.map(wishlist => <div key={wishlist._id}>
                        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex items-center justify-between">
                            <div className="flex space-x-4">
                                
                                    <img alt="" src={wishlist.property.agent.image} className=" w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                    <div className="flex flex-col space-y-1">
                                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{wishlist.property.agent.name}</a>
                                        <span className="text-xs dark:text-gray-600">Agent</span>
                                    </div>
                                    

                                </div>
                                <p className="flex items-center gap-1 font-semibold">{wishlist.property.status}<MdOutlineVerified size={28} className="text-blue-700" />
                                    </p>

                            </div>
                            <div>

                                <img src={wishlist.property.image} alt="" className=" w-full mb-4 sm:h-60 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{wishlist.property.title}</h2>
                                <p className="text-sm dark:text-gray-600">{wishlist.property.location}</p>
                                <p className="text-md font-semibold mt-2 dark:text-gray-600">Price Range: {wishlist.property.min_price} - {wishlist.property.max_price}</p>
                            </div>
                            <div className="flex flex-wrap justify-end gap-2 my-8">
                                
                                    <Link to={`/dashboard/makeOffer/${wishlist.property._id}`}>
                                    <button className="btn text-white bg-blue-700 rounded-2xl">
                                        Make an Offer
                                    </button>
                                    </Link>

                                    <button className="btn text-white bg-blue-700 rounded-2xl"> Delete
                                        
                                    </button>
                                
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Wishlist;