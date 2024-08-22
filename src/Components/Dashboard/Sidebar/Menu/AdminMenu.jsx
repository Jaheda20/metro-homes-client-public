import { FaUserCog } from "react-icons/fa"
import MenuItem from "./MenuItem"
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { CiMemoPad } from "react-icons/ci";



const AdminMenu = () => {
    return (
      <>
        <MenuItem icon={FaUserCog} label='Manage Users' address='manageUsers' />
        <MenuItem icon={FaHouseCircleExclamation} label='Manage Properties' address='manageProperties' />
        <MenuItem icon={GoCodeReview} label='Manage Reviews' address='manageReviews' />
        <MenuItem icon={CiMemoPad} label='Advertise Properties' address='advertiseProperties' />
      </>
    )
  }
  
  export default AdminMenu