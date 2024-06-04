import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDeleteForever, MdRealEstateAgent } from "react-icons/md";
import { TbAlien } from "react-icons/tb";

const UserDataRow = ({ user, refetch }) => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
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
                    <button className="btn hover:bg-blue-700 hover:text-white"><GrUserAdmin /></button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Make Agent">
                    <button className="btn hover:bg-blue-700 hover:text-white"><MdRealEstateAgent /></button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Fraudulent User">
                    <button className="btn hover:bg-blue-700 hover:text-white"><TbAlien /></button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Delete User">
                    <button className="btn hover:bg-blue-700 hover:text-white"><MdOutlineDeleteForever />
                    </button>
                </div>
            </td>

        </tr>
    );
};

export default UserDataRow;