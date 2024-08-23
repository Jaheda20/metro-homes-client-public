import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaAd } from "react-icons/fa";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AdvertiseDataRow = ({ property, refetch }) => {
    
    const axiosPublic = useAxiosPublic();

    // const axiosSecure = useAxiosSecure();
    const [advertised, setAdvertised] = useState(false);

    const { mutateAsync } = useMutation({
        mutationFn: async () => {
            console.log('attempting to load data ...')
            const { data } = await axiosPublic.put(`/property/advertise/${property?._id}`)
            console.log('server response',data)
            return data            
        },
        
        onSuccess: data => {
            refetch()
            console.log(data)
            setAdvertised(true)
            toast.success('Property is advertised')
        },
    })

    

    const handleAdvertise = async () => {
        try {
            await mutateAsync()

        }
        catch (err) {
            console.error(err.message)
            toast.error(err.message)
        }
    }

    

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <img src={property?.image} alt="" className="w-44" />
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.title}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.min_price}- {property?.max_price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.agent.name}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {
                    property?.status ? (
                        <p className={`font-bold ${property.status === 'Verified' ? 'text-blue-700' : property.status === 'Rejected' ? 'text-red-700' : 'text-yellow-500'}`}>{property.status}</p>
                    ) : (<p>No status Yet</p>)
                }

            </td>
            <td>
                <button 
                onClick={handleAdvertise} 
                className="btn bg-transparent"
                disabled={advertised}
                title={advertised ? 'Already Advertised' : 'Advertise Property'}>
                    <FaAd className="text-green-800" size={32} />
                </button>
            </td>

        </tr>
    );
};

export default AdvertiseDataRow;