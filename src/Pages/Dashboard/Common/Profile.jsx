import { Helmet } from 'react-helmet-async';
import useAuth from '../../../Hooks/useAuth'
import useRole from '../../../Hooks/useRole'

const Profile = () => {
  const { user, loading } = useAuth() || {}
  const [role, isLoading] = useRole();

  console.log(user)
  if (isLoading || loading)
    return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>               
        </div>          
    )

  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
                <title>Metro Homes || My Profile</title>
            </Helmet>
      <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
        <img
          alt='profile'
          src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2gxMC1teW50LTEyLmpwZw.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 uppercase px-4 text-xs text-white bg-blue-700 rounded-full'>
            {role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-blue-700 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-gray-800 block mb-1'>
                  Update Profile
                </button>
                <button className='bg-blue-700 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-gray-800'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

