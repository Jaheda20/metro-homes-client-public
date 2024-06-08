import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = [], isLoading} = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email,
        queryFn: async() => {
            const {data} = await axiosSecure.get(`/payment/${user?.email}`)
            return data
        }
    })
    return {payments, isLoading}
};




export default usePayment;