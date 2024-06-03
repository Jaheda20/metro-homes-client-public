import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDelete, MdOutlineVerified } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyAddedProperties = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['my-added-properties', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/myAddedProperties/${user?.email}`)
            return data
        }
    })

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">My listing page: <span className="bg-blue-200 p-2">{properties.length}
                </span></h2>
            <div className="grid md:grid-cols-3">
                {
                    properties.map(property => <div key={property.key}>
                        <div className="flex flex-col w-96 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex space-x-4">
                                <img alt="" src={property.agent.image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{property.agent.name}</a>
                                    <span className="text-xs dark:text-gray-600">Agent</span>
                                </div>
                            </div>
                            <div>
                                <img src={property.image} alt="" className="object-cover w-full mb-4 h-48 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{property.title}</h2>
                                <p className="text-sm dark:text-gray-600">${property.min_price} - ${property.max_price}</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="space-x-2">
                                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                                   
                                    <p className="flex items-center gap-2 bg-blue-200 py-2 rounded-3xl px-3">  <MdOutlineVerified size={24} /> Verified?</p>

                                    </button>
                                    
                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-600">
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <FaEdit size={24} />

                                    </button>
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <MdDelete size={24} />

                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;