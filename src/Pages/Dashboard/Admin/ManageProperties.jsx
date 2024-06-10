import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PropertyDataRow from "../../../Components/Table/PropertyDataRow";
import { Helmet } from "react-helmet-async";

const ManageProperties = () => {
    const axiosSecure = useAxiosSecure();
    const {data: properties = [], isLoading, refetch} = useQuery({
        queryKey: ['properties'],
        queryFn: async () =>{
            const {data} = await axiosSecure('/allProperties')
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
                <title>Metro Homes || Manage Properties</title>
            </Helmet>
            <h2 className="text-2xl font-semibold my-10">Manage Properties: ({properties.length})</h2>
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
                                            Property Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                                        >
                                            Location
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
                                            Agent Email
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
                                            Actions
                                        </th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {properties.map(property => 
                                    <PropertyDataRow key={property._id}
                                        property={property}
                                        refetch={refetch}>
                                    </PropertyDataRow>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProperties;