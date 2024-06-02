import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FiMapPin } from "react-icons/fi";
import { FaBath, FaBed } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const PropertyDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: property = [], isLoading } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/property/${id}`)
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="mx-auto max-w-4xl w-full flex flex-col mt-20">
            <div className="mb-20">
            <div className="flex flex-col items-center relative">
                <img src={property.image} alt="" className="w-full" />
                <p className="absolute flex items-center text-lg gap-2 font-semibold top-8 right-10 bg-white py-2 px-6 bg-opacity-70 rounded-md"><CiHeart size={20}/> Add to Wishlist
                </p>
            </div>
            <div className="mt-10 flex justify-between w-full">
                <div className="">
                    <h1 className="text-2xl font-semibold">{property.title}</h1>
                    <p className="flex items-center gap-3 text-lg mt-2 font-semibold"><FiMapPin /> {property.location}</p>
                    <div className="flex items-center gap-5 mt-2">
                        <p className="flex items-center gap-3 text-lg"> <FaBed />
                            {property.bedrooms} bedrooms</p>
                        <p className="flex items-center gap-3 text-lg"> <FaBath />
                            {property.bathrooms} bath </p>
                    </div>
                    <h1 className="text-xl font-semibold mt-2">${property.min_price} - ${property.max_price}</h1>
                </div>

                <div className="justify-start bg-gray-200 w-72 p-2">
                    <h1 className="font-semibold md:text-2xl">Want to schedule a tour?</h1>
                    <h3 className="md:text-lg">Contact Agent</h3>
                    <h3 className="font-bold">{property?.agent?.name}</h3>
                    <p className="font-bold">Email: {property?.agent?.email}</p>
                </div>

            </div>

            <p className="mt-10 text-lg mb-20">
                <span><b>Description:</b></span> {property.description}
            </p>

            </div>

            {/* comments */}

            <h1 className="text-3xl mb-10">Comments:</h1>
            



        </div>
    );
};

export default PropertyDetails;