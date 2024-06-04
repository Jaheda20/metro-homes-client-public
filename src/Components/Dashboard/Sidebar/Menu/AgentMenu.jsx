import { BsFillHouseAddFill } from "react-icons/bs";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";

const AgentMenu = () => {

    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Property' address='addProperty' />
            <MenuItem icon={MdHomeWork} label='My Added Properties' address='myAddedProperties' />
            <MenuItem icon={FaHouseCircleCheck} label='My Sold Properties' address='mySoldProperties' />
            <MenuItem icon={FaHouseCircleCheck} label='My Requested Properties' address='requestedProperties' />

        </>
    );
};

export default AgentMenu;