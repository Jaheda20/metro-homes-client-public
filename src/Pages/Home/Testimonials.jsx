import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const Testimonials = () => {
    
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/reviews')
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
            <h1 className="font-semibold text-4xl mt-10 mb-6 text-center">Hear from Our Clients</h1>

            <div id="parent" className="swiper-container mb-10 bg-gray-100">
                <Swiper
                    navigation={true} modules={[Navigation]} className="mySwiper"
                >
                    <div className="bg-gray-100">
                        {reviews.map(review => <SwiperSlide key={review.id} review={review}>
                            <div className="container max-w-3xl mx-auto">
                                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                    <img src={review.authorImage} alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                    <p className='font-bold'>Property Name: {review.title}</p>
                                    <blockquote className="max-w-2xl text-lg italic font-medium text-center">"{review.description}"</blockquote>
                                    <div className="text-center dark:text-gray-600">
                                        <p>- {review.authorName}</p>
                                        
                                    </div>
                                    <div className="flex space-x-2">
                                        <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
                                        <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                                        <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                                        <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </div>

                </Swiper>

            </div>



        </div>
    );
};

export default Testimonials;