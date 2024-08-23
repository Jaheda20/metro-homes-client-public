import { Link } from "react-router-dom";

const LoginReminder = () => {
    return (
        <div className="flex flex-col md:flex-row shadow-xl mt-6 mb-28 rounded-xl p-8 bg-gray-50">
            <div className="md:w-2/3">
                <img src="https://www.mashvisor.com/blog/wp-content/uploads/2019/03/How-to-Buy-a-House-Without-a-Realtor-as-a-First-Time-Investor.jpg" alt="" />
            </div>

            <div className="flex flex-col items-start justify-center my-10 px-10 md:w-1/3">
                <p className="text-xl mb-5 text-blue-700 font-semibold">MY PAGES</p>
                <h1 className="text-4xl font-semibold mb-4">Everything about your accomodation</h1>
                <p className="text-lg">On My Pages you can find everything you need as an user with us. Here you can easily make a service request, find your rental savings and see current information about your accommodation. </p>
                <Link to="/login"> <button className="mt-12 btn rounded-3xl text-lg text-blue-700 border-blue-700 px-8">Login Here !</button>
                </Link>

            </div>

        </div>
    );
};

export default LoginReminder;