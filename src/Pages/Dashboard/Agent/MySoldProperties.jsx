import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SoldDataRow from "../../../Components/Table/SoldDataRow";

const MySoldProperties = () => {

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: soldProperties = [], isLoading } = useQuery({
    queryKey: ['sold', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/sentOffers/${user?.email}`)
      return data
    }
  })

  const totalPrice = soldProperties.reduce((total, property) => total + (parseFloat(property.amount)), 0)

  if (isLoading) return (
    <div className="flex items-center justify-center text-7xl my-40">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  )



  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-10 font-semibold">Total Sold: ({soldProperties.length}) </h1>
        <h3 className="font-semibold ">Total Revenue ($): 
        <span className="text-blue-700"> {totalPrice}</span>
        </h3>

      </div>


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
                  Sold price ($)
                </th>


              </tr>
            </thead>
            <tbody>
              {
                soldProperties.map(prop =>
                  <SoldDataRow
                    key={prop._id}
                    prop={prop}>


                  </SoldDataRow>)
              }

              {/* {gotOffers.map(offers => <OfferedDataRow key={offers._id}
                  offers = {offers}
                  user={user}
                  refetch = {refetch}>
                  </OfferedDataRow>)} */}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default MySoldProperties;