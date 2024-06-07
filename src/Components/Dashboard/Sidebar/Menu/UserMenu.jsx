import toast from 'react-hot-toast';
import AgentModal from '../../../Modal/AgentModal';
import MenuItem from './MenuItem';
import { FaClipboardList, FaUserCog } from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';
import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useRole from '../../../../Hooks/useRole';
import { FaBuildingCircleCheck } from 'react-icons/fa6';

const UserMenu = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role] = useRole()

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const modalHandler = async () => {
        console.log('Want to be an agent')
        try {
            const currentUser = {
                email: user?.email,
                role: 'user',
                status: 'Requested'
            }
            const { data } = await axiosSecure.put(`/user`, currentUser)
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('Success! Please wait for admin approval')
            } else {
                toast.success('Please!, Wait for admin approval👊')
            }
        }
        catch (err) {
            console.log(err)
        }
        finally {
            closeModal()
        }
    }
    return (
        <div>
            <MenuItem icon={FaBuildingCircleCheck} label='Property Bought' address='propertyBought' />
            <MenuItem icon={FaUserCog} label='My Reviews' address='myReviews' />
            <MenuItem icon={FaClipboardList} label='My Wishlist' address='myWishlist' />

            {role === 'user' && (
                        <div
                          onClick={() => setIsModalOpen(true)}
                          className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-white  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
                        >
                          <MdRealEstateAgent className='w-5 h-5' />
                
                          <span className='mx-4 font-medium'>Be An Agent</span>
                        </div>
                      )}
                      
                      <AgentModal
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        modalHandler={modalHandler}
                      />
        </div >
    );
};

export default UserMenu;