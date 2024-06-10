import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { MdDelete, MdOutlineVerified } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyAddedProperties = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['my-added-properties', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myAddedProperties/${user?.email}`)
            return data
        }
    })

    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/property/${id}`)
            return data
        },
        onSuccess: data => {
            console.log(data)
            refetch()

        }
    })

    const handleDelete = async id => {
        console.log(id)
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            try {
                await mutateAsync(id)
            }
            catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
    }

    if (isLoading)
        return
    <div className="flex items-center justify-center text-7xl my-40">
        <span className="loading loading-bars loading-lg"></span>
    </div>


    return (
        <div>
            <Helmet>
                <title>Metro Homes || My Added Properties</title>
            </Helmet>
            <h2 className="text-2xl font-semibold my-8">My listings: ({properties.length})
            </h2>
            <div className="grid md:grid-cols-3">
                {
                    properties.map(property => <div key={property._id}>
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
                                        <p className="flex items-center gap-2 bg-blue-200 py-2 rounded-3xl px-3">  <MdOutlineVerified size={24} /> {property.status}</p>
                                    </button>

                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-600">
                                    {
                                        property.status === 'Rejected' ?
                                            ""
                                            :
                                            <Link to={`/dashboard/property/update/${property._id}`}>
                                                <button className="btn flex items-center p-1 space-x-1.5">
                                                    <FaEdit size={24} />
                                                </button>
                                            </Link>
                                    }

                                    <button onClick={() => handleDelete(property._id)} className="flex btn items-center p-1 space-x-1.5">
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