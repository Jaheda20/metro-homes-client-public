import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaAd } from "react-icons/fa";


const AdvertiseDataRow = ({property, refetch}) => {

    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async () => {
            const { data } = await axiosSecure.put(`/property/advertise/${property?._id}`)
            return data
        },
        onSuccess: data => {
            refetch()
            console.log(data)
            toast.success('Property is advertised')
        },
    })

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
                <button className="btn bg-transparent">
                <FaAd className="text-green-800" size={32}/>
                </button>
            </td>
            {/* <td>
                {
                    property?.status === 'Rejected' ? (<p className="text-red-700 bg-yellow-300 text-center py-1 rounded-xl"> Rejected </p>)
                        :
                        (<>
                            <div className="tooltip" data-tip="Verify">
                                <button onClick={handleVerify} className="btn "><RiVerifiedBadgeFill className="text-blue-700" size={20} />
                                </button>
                            </div>


                            <div className="tooltip" data-tip="Reject">
                                <button onClick={handleReject} className="btn "><GiCancel className="text-red-700" size={20} /></button>
                            </div>
                        </>

                        )
                }
            </td> */}


            


        </tr>
    );
};

export default AdvertiseDataRow;