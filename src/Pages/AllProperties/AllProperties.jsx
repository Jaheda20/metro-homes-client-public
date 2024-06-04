import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Map from "../../Components/Map/Map";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {

    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    
    const getData = async () => {
        const { data } = await axiosPublic.get(`/properties?search=${search}`
        );
        return data;
    };

    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['properties', { search }],
        queryFn: getData,

    });


    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText)
        refetch();
    }

    const handleReset = () => {
        setSearch('');
        setSearchText('');
        refetch();
    }

    

    return (
        <div className="my-20">
            <h2 className="text-4xl font-semibold mb-8">Homes for Sale</h2>
            
            <div className="flex items-center justify-end my-6 gap-3">
                <form onSubmit={handleSearch} className="flex items-center justify-center ">
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="w-96" name="search" onChange={e => setSearchText(e.target.value)} value={searchText} placeholder="Enter Location Name" />

                        <button className='px-1 md:px-4 py-2 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 hover:text-white rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </label>

                </form>
                <button onClick={handleReset} className="btn border-blue-700 text-blue-700">Reset</button>

            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-2/3 gap-4 ">
                    {
                        properties.map(property => <div key={property._id}>
                            <div className="card card-side bg-base-100 shadow-xl mb-4">
                                <figure className="relative"><img src={property.image} alt="image" className="w-96 p-2" /></figure>
                                <p className="absolute top-10 left-10 bg-white p-2 px-4 bg-opacity-80 text-black font-bold rounded-2xl">Verified</p>
                                <div className="card-body">
                                    <h2 className="card-title">{property.title}</h2>
                                    <p>${property.min_price}-${property.max_price}</p>
                                    <p className="flex items-center gap-2"><FiMapPin />
                                        {property.location}</p>
                                    <div className="flex gap-2 mt-6">
                                        <img src={property.agent.image} alt="" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="font-bold ">
                                                Contact Person:
                                            </p>
                                            <p>{property.agent.name}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/property/${property._id}`}>
                                            <button className="btn border-blue-700 text-blue-700 font-semibold rounded-3xl px-8">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }


                </div>

                <div className="w-full md:w-1/3">
                    <Map
                        properties={properties}
                    ></Map>

                </div>

            </div>


        </div>
    );
};

export default AllProperties;