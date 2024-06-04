import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const PropertyDataRow = ({ property, refetch }) => {

    const axiosSecure = useAxiosSecure();
    const { mutateAsync } = useMutation({
        mutationFn: async status => {
            const { data } = await axiosSecure.patch(`/property/status/${property?._id}`, status)
            return data
        },
        onSuccess: data => {
            refetch()
            console.log(data)
            toast.success('Property status is updated successfully!')
        },
    })

    const handleVerify = async () => {
        try {
            await mutateAsync({ status: 'Verified' })
        }
        catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.location}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.min_price}- {property?.max_price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.agent.name}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.agent.email}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.status ? (
                    <p className={`${property.status === 'Verified' ? 'text-blue-700' : 'text-yellow-500'}`}> {property.status}                       
                    </p>) : (<p className='text-red-500'>Rejected</p> )
                }

            </td>
            <td>
                <div className="tooltip" data-tip="Verify">
                    <button onClick={()=>handleVerify()} className="btn "><RiVerifiedBadgeFill className="text-blue-700" size={20} />
                    </button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Reject">
                    <button className="btn "><GiCancel className="text-red-700" size={20} /></button>
                </div>
            </td>


        </tr>
    );
};

export default PropertyDataRow;