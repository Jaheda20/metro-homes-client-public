import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import useAuth from '../Hooks/useAuth';
import { TbLogout } from 'react-icons/tb';
import { FaHouseUser } from 'react-icons/fa';
import defaultUser from '../assets/images/user.png'
import { MdOutlineDashboard, MdRealEstateAgent } from "react-icons/md";
import { useState } from 'react';
import AgentModal from '../Components/Modal/AgentModal';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';


const Nav = () => {

    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-50 font-bold' : 'font-bold'} to="/">Home</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-50 font-bold' : 'font-bold'} to="/allProperties">All Properties</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-50 font-bold' : 'font-bold'} to="/dashboard">Dashboard</NavLink> </li>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-50 font-bold' : 'font-bold'} to="/customerService">Contact</NavLink> </li>

    </>

    const axiosSecure = useAxiosSecure();
    const { user, logOut } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="navbar bg-base-100 mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-3xl">
                        <span>
                            <img src={logo} alt="" className="w-12 hidden md:block" />
                        </span>
                        Metro Homes</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-4">
                                <div tabIndex={0} className="hover:underline">
                                    <p>{user?.displayName || 'Unknown User'}</p>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><Link to="/dashboard"><FaHouseUser /> Profile</Link></li>

                                    <li><button onClick={() => setIsModalOpen(true)}><MdRealEstateAgent /> Be an Agent</button></li>
                                    <AgentModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} />

                                    <li>
                                        <Link to="/dashboard"><MdOutlineDashboard /> My Pages</Link> </li>
                                    <li><a onClick={logOut}><TbLogout /> Logout</a></li>

                                </ul>

                                <div className=" " >
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || defaultUser} className='w-10 h-10 rounded-full' />
                                </div>

                            </div>


                            :
                            <Link to="/login">
                                <button className="btn btn-xs sm:btn-sm md:btn-md bg-blue-600 text-white">Login</button>
                            </Link>
                    }


                </div>
            </div>

        </div>
    );
};

export default Nav;