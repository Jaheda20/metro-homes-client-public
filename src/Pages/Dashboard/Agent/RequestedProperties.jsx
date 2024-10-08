import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import OfferedDataRow from "../../../Components/Table/OfferedDataRow";
import { Helmet } from "react-helmet-async";

const RequestedProperties = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const { data: gotOffers = [], isLoading, refetch } = useQuery({
        queryKey: ['offers', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/sentOffers/${user?.email}`)
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
                <title>Metro Homes || My Requested Properties</title>
            </Helmet>
            <h2 className="text-2xl font-semibold my-10">Requested/Offered: ({gotOffers.length})</h2>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
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
                      Buyer Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                      Buyer Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-semibold text-left text-sm uppercase'
                    >
                      Offered price ($)
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                      Status
                    </th>
           
                  </tr>
                </thead>
                <tbody>                  
                  {gotOffers.map(offers => <OfferedDataRow key={offers._id}
                  offers = {offers}
                  user={user}
                  refetch = {refetch}>
                  </OfferedDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
};

export default RequestedProperties;