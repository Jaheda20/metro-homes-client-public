import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Map from "../../Components/Map/Map";
import { FiMapPin } from "react-icons/fi";

const AllProperties = () => {

    const axiosPublic = useAxiosPublic();

    const { data: properties = [], isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/properties')
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="my-20">
            <h2 className="text-4xl font-semibold mb-8">Homes for Sale</h2>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-2/3 gap-4 ">
                    {
                        properties.map(property => <div key={property._id}>
                            <div className="card card-side bg-base-100 shadow-xl mb-4">
                                <figure className="relative"><img src={property.image} alt="image" className="w-96 p-2" /></figure>
                                <p className="absolute top-10 left-10 bg-white p-2 px-4 bg-opacity-80 text-black font-bold rounded-2xl">Verified</p>
                                <div className="card-body">
                                    <h2 className="card-title">{property.title}</h2>
                                    <p>${property.min_price}-${property.max_price}</p>
                                    <p className="flex items-center gap-2"><FiMapPin />
                                        {property.location}</p>
                                    <div className="flex gap-2 mt-6">
                                        <img src={property.agent.image} alt="" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="font-bold ">
                                                Contact Person:
                                            </p>
                                            <p>{property.agent.name}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn border-blue-700 text-blue-700 font-semibold rounded-3xl px-8">Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }


                </div>

                <div className="w-full md:w-1/3">
                    <Map
                    properties={properties}
                    ></Map>

                </div>

            </div>


        </div>
    );
};

export default AllProperties;