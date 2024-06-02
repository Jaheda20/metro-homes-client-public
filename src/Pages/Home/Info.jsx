import { FaCity } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineHomeWork } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";

const Info = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="flex flex-col items-center justify-center space-y-6 shadow-sm p-4">
            <GrMapLocation size={68} />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">NUMBER OF COUNTRIES</h3>
                <p className="text-4xl font-semibold mt-3">8</p>
            </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 shadow-sm p-4">
            <FaCity size={68} />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">NUMBER OF CITIES IN EUROPE</h3>
                <p className="text-4xl font-semibold mt-3">230</p>
            </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 shadow-sm p-4">
            <MdOutlineHomeWork size={68} />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">NUMBER OF HOMES IN SWEDEN</h3>
                <p className="text-4xl font-semibold mt-3">45,000</p>
            </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 shadow-sm p-4">
            <RiMentalHealthFill size={68} />
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">NUMBER OF EMPLOYEES</h3>
                <p className="text-4xl font-semibold mt-3">300+</p>
            </div>
            </div>

            

            

        
            
            
        </div>
    );
};

export default Info;