import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

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
            <h2 className="text-2xl font-semibold my-10">Requested/Offered: ({gotOffers.length})</h2>
        </div>
    );
};

export default RequestedProperties;