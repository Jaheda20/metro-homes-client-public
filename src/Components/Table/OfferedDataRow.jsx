import { SiTicktick } from "react-icons/si";
import { GiCancel } from "react-icons/gi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";




const OfferedDataRow = ({ user, refetch, offers }) => {

    const axiosSecure = useAxiosSecure();
    const { mutateAsync } = useMutation({
        mutationFn: async status => {
            const { data } = await axiosSecure.patch(`/offers/status/${offers?._id}`, status)
            return data
        },
        onSuccess: data => {
            refetch()
            console.log(data)
            toast.success('Offer is accepted!')
        },
    })

    const handleAccept = async () => {
        try {
            await mutateAsync({ status: 'Accepted' })
        }
        catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }

    const handleReject = async () => {
        try {
            await mutateAsync({ status: 'Rejected' })
        }
        catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{offers?.title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{offers?.location}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{offers?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{offers?.buyerName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{offers?.amount}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {
                    offers?.status ? (
                        <p className={`font-bold ${offers?.status === 'Accepted' ? 'text-blue-700' :
                                offers?.status === 'Rejected' ? 'text-red-700' : offers?.status === 'Bought' ? 'text-green-700' : 'text-yellow-500'}`}>{offers.status}</p>
                    ) : (<p>Pending</p>)
                }

            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='text-gray-900 whitespace-no-wrap flex flex-col gap-2'>

                    {
                        offers?.status === 'Accepted' ? (<p className="text-blue-700 bg-yellow-300 text-center font-bold  py-1 rounded-xl"> Accepted </p>) :


                            offers?.status === 'Rejected' ?
                                (<p className="text-red-700 bg-yellow-300 font-bold text-center py-1 rounded-xl"> Rejected </p>) :
                                offers?.status === 'Bought' ?
                                (<p className="text-green-700 font-bold bg-yellow-300 text-center py-1 rounded-xl"> Bought </p>)


                                :
                                (<>
                                    <button onClick={handleAccept} className="text-blue-700 btn"> <SiTicktick size={20} />
                                    </button>
                                    <button onClick={handleReject} className="text-red-700 btn"> <GiCancel size={20} />
                                    </button>
                                </>

                                )
                    }

                </div>
            </td>







        </tr>
    );
};

export default OfferedDataRow;