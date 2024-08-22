import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import AdvertiseDataRow from "../../../Components/Table/AdvertiseDataRow";

const AdvertiseProperties = () => {

    const axiosPublic = useAxiosPublic();

    const { data: properties = [], isLoading, refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/properties?status=verified`)
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div>
            <Helmet>
                <title>Metro Homes || Advertise Properties</title>
            </Helmet>
            <h1 className="text-2xl font-semibold my-10">Advertise: {properties.length}</h1>

            <div className='container mx-auto px-4 sm:px-8'>

                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Property Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Property Title
                                        </th>
                                        
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Price Range ($)
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Agent Name
                                        </th>
                                        
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Verification Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Advertise
                                        </th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map(property => 
                                    <AdvertiseDataRow key={property._id}
                                        property={property}
                                        refetch={refetch}>
                                    </AdvertiseDataRow>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProperties;