import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { BiLike } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";


const Comments = ({ property }) => {

    const axiosSecure = useAxiosSecure();
    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['propertyReviews', property._id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/reviews/${property._id}`)
            return data
        }
    })


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const formatter = new Intl.DateTimeFormat('en-CA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        return formatter.format(date)
    }



    return (
        <div>
            <h1 className="text-2xl mb-10">Comments: ({reviews.length})</h1>
            <div className="border  mb-10">
                {
                    reviews.map(review => <div key={review._id}>
                        <div className="px-10 py-8 m-16 border mb-20">

                            <div className="">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <img src={review?.authorImage} alt="" className="w-16 h-16 rounded-full bg-blue-600" />
                                        <h2>{review?.authorName}</h2>
                                    </div>
                                    <p> {formatDate(review?.timestamp)}</p>
                                </div>
                                <div className="mt-4">

                                    <p className="px-2">{review.description}</p>
                                </div>
                                <div className="mt-4 mb-6 border-2">
                                    <hr />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <BiLike size={20} />
                                        <FaRegHeart size={20} />
                                   </div>
                                   <FiShare2 size={20}/>

                                </div>


                            </div>



                        </div>


                    </div>)
                }

            </div>


            {/* <div className="border-2 p-8 my-10">

                <div className="p-4 border-blue-700">
                    <form>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <img src="" alt="" className="w-12 h-12 rounded-full bg-blue-600" />
                                    <h2>Author name</h2>
                                </div>
                                <p>Time</p>
                            </div>
                            <div className="mt-1">
                            
                                <textarea name="" id="" className=" w-full h-28 rounded-xl border"></textarea>
                            </div>
                            <div className="mt-4 mb-6 border-2">
                                <hr />
                            </div>
                            <div className="my-4 flex justify-end">
                                <button className="btn border-blue-700 text-blue-700 font-semibold px-8">Post Comment</button>

                            </div>

                        </div>

                    </form>

                </div>

            </div> */}


        </div >
    );
};

export default Comments;