import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDeleteForever, MdRealEstateAgent } from "react-icons/md";
import { TbAlien } from "react-icons/tb";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const UserDataRow = ({ user, refetch }) => {
    const {user: loggedInUser} = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAgent, setIsAgent] = useState(false);
    const [isFraud, setIsFraud] = useState(false);


    const axiosSecure = useAxiosSecure();
    const { mutateAsync } = useMutation({
        mutationFn: async role => {
            const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role)
            return data
        },
        onSuccess: data => {
            refetch()
            console.log(data)
            toast.success('User role is updated successfully!')
        },
    })

    const handleAdmin = () => {
        mutateAsync({ role: 'Admin', status: 'Verified' })
        setIsAdmin(true)

    }

    const handleAgent = () => {
        mutateAsync({ role: 'Agent', status: 'Verified' })
        setIsAgent(true)
    }

    const handleFraud = async () => {
        await mutateAsync({ role: 'Fraud', status: 'Rejected', isFraud: true })
        setIsFraud(true)
    }



    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteUser/${user.email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {
                    
                        user?.role === 'Admin' ? <p className="font-bold text-blue-700">{user?.role}</p>
                            :
                            <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
                    
                }

            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {user?.status ? (
                    <p
                        className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
                            } whitespace-no-wrap`}
                    >
                        {user.status}
                    </p>
                ) : (
                    <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                )}
            </td>
            <td>
                <div className="tooltip" data-tip="Make Admin">
                    <button onClick={handleAdmin} disabled={isAdmin || user?.isFraud} className="btn hover:bg-blue-700 hover:text-white"><GrUserAdmin /></button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Make Agent">
                    <button onClick={handleAgent} disabled={user?.isAgent || user?.isFraud} className="btn hover:bg-blue-700 hover:text-white"><MdRealEstateAgent /></button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Delete User">
                    <button onClick={() => handleDeleteUser(user)} className="btn hover:bg-blue-700 hover:text-white"><MdOutlineDeleteForever />
                    </button>
                </div>
            </td>
            {
                user?.role === 'Agent' && (
                    <td>
                        {
                            isFraud ? (
                                <span className="text-red-500">
                                    <button className="btn bg-red-300"><TbAlien /></button>
                                </span>
                            ) : (
                                <div className="tooltip" data-tip="Fraudulent User">
                                    <button onClick={handleFraud} disabled={isFraud} className="btn hover:bg-blue-700 hover:text-white">
                                        <TbAlien />
                                    </button>
                                </div>
                            )
                        }
                    </td>
                )
            }



        </tr >
    );
};

export default UserDataRow;