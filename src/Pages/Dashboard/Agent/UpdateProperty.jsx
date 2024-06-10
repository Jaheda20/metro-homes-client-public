import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { imageUpload } from "../../../api/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpdateProperty = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const { id } = useParams();
    const axiosSecure = useAxiosSecure()

    const { data: property = [], isLoading, refetch } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/property/${id}`)
            return data
        },
    })
    console.log(property)
    const [propertyData, setPropertyData] = useState(property)

    const handleImage = async image => {
        setLoading(true)
        try {
            // upload image
            const image_url = await imageUpload(image)
            console.log(image_url)
            setPropertyData({ ...propertyData, image: image_url })
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
            toast.error(err.message)
        }
    }
    console.log('new', propertyData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const updatedPropertyData = Object.assign({}, propertyData)
        delete updatedPropertyData._id

        try {
            const { data } = await axiosSecure.put(`/property/update/${property?._id}`, updatedPropertyData)
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your property has been updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
                navigate('/dashboard/myAddedProperties')
            }
        }

        catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }



    return (
        <div>
            <Helmet>
                <title>Metro Homes || Update Property</title>
            </Helmet>
            <h2 className="text-3xl font-semibold mt-10 mb-4">Update Property Info : {property._id}</h2>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="title" className="text-sm">Property Title</label>
                                <input id="title" name="title" value={propertyData?.title}
                                    onChange={e => setPropertyData({ ...propertyData, title: e.target.value })} type="text" placeholder="Property Title" className="w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Location</label>
                                <input id="location" name="location" value={propertyData?.location} onChange={e => setPropertyData({ ...propertyData, location: e.target.value })} type="text" placeholder="Location" className="w-full rounded-md focus:ring text-black focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="min_price" className="text-sm">Minimum Price</label>
                                <input id="minPrice" name="minPrice" value={propertyData?.min_price} onChange={e => setPropertyData({ ...propertyData, min_price: e.target.value })} type="number" placeholder="Minimum Price" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="max_price" className="text-sm">Maximum Price</label>
                                <input id="maxPrice" name="maxPrice" value={propertyData?.max_price} onChange={e => setPropertyData({ ...propertyData, max_price: e.target.value })} type="number" placeholder="Maximum Price" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            {/* image */}
                            <div className=' col-span-4 mt-6 bg-gray-200'>
                                <div className='file_upload px-5 py-3 relative border-2 border-dotted border-blue-700 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                onChange={e => handleImage(e.target.files[0])}
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='bg-blue-700 text-white border border-blue-700 rounded font-semibold cursor-pointer py-2 px-3 '>
                                                Upload Image
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Username</label>
                                <input id="name" name="name" defaultValue={user?.displayName} type="text" placeholder="Agent's Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name="email" defaultValue={user?.email} type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" readOnly />
                            </div>

                            <button className="btn border-blue-700 text-blue-700 my-10 rounded-3xl">Update</button>
                        </div>
                    </fieldset>
                </form>
            </section >
        </div >
    );
};

export default UpdateProperty;