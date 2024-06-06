import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyReviews = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['myReviews', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myReviews/${user?.email}`)
            return data
        }
    })
    console.log(reviews)

    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/review/${id}`)
            return data
        },
        onSuccess: data => {
            console.log(data)
            refetch()

        }
    })

    const handleDelete = async id => {
        console.log(id)
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            try {
                await mutateAsync(id)
            }
            catch (err) {
                console.log(err)
                toast.error(err.message)
            }
        }
    }

    if (isLoading)
        return
    <div className="flex items-center justify-center text-7xl my-40">
        <span className="loading loading-bars loading-lg"></span>
    </div>

    return (
        <div>
            <h1 className="text-2xl font-semibold my-10">My reviews: ({reviews.length})</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    reviews.map(review => <div key={review._id}>
                        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{review.title}</h2>
                                    <span className="text-sm dark:text-gray-600">Agent:</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-2">

                                        <span className="dark:text-gray-600">
                                            {review.description.slice(0, 100) + '...'}</span>
                                    </div>
                                    <span className="flex items-center space-x-2">

                                        <p className="dark:text-gray-600">Posted: {review.timestamp}</p>
                                    </span>
                                </div>
                                <div className="justified-start">
                                <button onClick={()=>handleDelete(review._id)} className="btn btn-sm border-blue-700 text-blue-700">Delete</button>

                                </div>
                                
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReviews;