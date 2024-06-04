import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import useRole from '../../../Hooks/useRole';
import useAuth from '../../../Hooks/useAuth';
import MenuItem from './Menu/MenuItem';
import AdminMenu from './Menu/AdminMenu';
import AgentMenu from './Menu/AgentMenu';
import UserMenu from './Menu/UserMenu';


const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();
  const navigate = useNavigate();
  console.log(role)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const handleLogout = () =>{
    logOut()
    navigate ('/')
  }


  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                src={logo}
                alt='logo'
                width='60'
                height='60'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-700 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center   mx-auto'>
              <Link to='/' className="flex items-center gap-2">
                <img
                  src={logo}
                  alt='logo'

                  className='rounded-full bg-slate-100 p-1 w-12 h-12 '
                />
                <p className='text-2xl font-semibold text-white'>Metro Homes</p>
              </Link>
            </div>
          </div>


          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              <MenuItem label={'Statistics'} address={'/dashboard'} icon={BsGraphUp}></MenuItem>

              {role === 'Admin' && <AdminMenu></AdminMenu> }
              {role === 'Agent' && <AgentMenu></AgentMenu>}
              {role === 'user' && <UserMenu></UserMenu>} 
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            label='Profile'
            address='/dashboard/profile'
            icon={IoSettingsOutline}
          />
          <button onClick={()=>handleLogout(logOut)}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5 text-white' />

            <span className='mx-4 text-white font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar