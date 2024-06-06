import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const ManageReviews = () => {

    const axiosSecure = useAxiosSecure()
    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/reviews')
            return data
        }
    })

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

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div>
            <h1 className="text-2xl font-semibold my-8">All Reviews: ({reviews.length})</h1>
            <div className="grid">
                {
                    reviews.map(review => <div key={review._id}>
                        <div className="max-w-5xl p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={review.authorImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{review.authorName}</h2>
                                    <span className="text-sm dark:text-gray-600">Reviewer</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                        </svg>
                                        <span className="dark:text-gray-600">{review.authorEmail}</span>
                                    </span>
                                    <span className="flex items-center space-x-2">

                                        <span className="dark:text-gray-600 font-sm">Review: {review.description}</span>
                                    </span>
                                </div>
                                <div>
                                    <p>Property ID: <span className="text-blue-700">{review.propertyId}</span> </p>
                                </div>

                                <div className="">
                                    <button onClick={()=>handleDelete(review._id)} className="btn text-blue-700 my-8 border-blue-700 rounded-xl px-8">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;