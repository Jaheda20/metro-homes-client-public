import { TiArrowBack } from "react-icons/ti";
import errorImg from "../../assets/images/errorImage.jpg"
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={errorImg} alt="" className="w-1/3" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Opps... This page is not found</h1>
                <p className="text-lg mb-8">This page does not seem to exist. Do not feel bad, let us help you to get back on your way! </p>
                
                <Link to="/">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border border-indigo-800 text-blue-700 rounded-3xl hover:bg-blue-300 "> <TiArrowBack />
                    Head Back To Home Page</button>
                </Link>
                 
            </div>
        </div>
    );
};

export default ErrorPage;