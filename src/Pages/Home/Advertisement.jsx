import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Advertisement = () => {
    const axiosPublic = useAxiosPublic();

    const { data: properties = [], isLoading } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/properties/advertised?isAdvertised=true`)
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="mb-16">
            <h1 className="text-4xl font-semibold mt-20 mb-8 text-center">Newly Listed Homes in Sweden</h1>
            {/* <div className="grid md:grid-cols-4 gap-6">
                {
                    properties.map(property => <div key={property._id}>
                        <div className="card bg-base-100 shadow-xl hover:scale-110">
                            <div className="p-4 relative md:h-52 mb-4">
                                <figure><img src={property.image} alt="" className="hover:scale-110 transition" /></figure>
                                <p className="absolute top-10 right-10 bg-white p-2 bg-opacity-80 text-black font-bold px-4 rounded-2xl">{property.status}</p>

                            </div>

                            <div className="card-body">
                                <h2 className="card-title">{property.title}</h2>
                                <p>Price: ${property.min_price} - ${property.max_price}</p>
                                <p className=""> {property.location} </p>

                                <div className="card-actions justify-end">
                                    <Link to={`/property/${property._id}`}>
                                        <button className="btn border-blue-700 text-blue-700 font-semibold rounded-3xl px-8">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div> */}

            <div className="mt-20 mb-20 md:mb-40 max-w-7xl mx-auto w-full ">

                <div className="mt-10 p-8">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }

                        }}
                        className="mySwiper"
                    >
                        {
                            properties.slice(0, 9).map((property, index) => (
                                <SwiperSlide key={index}>
                                    <div className="card bg-base-100 shadow-xl hover:scale-110">
                                        <div className="p-4 relative md:h-52 mb-4">
                                            <figure><img src={property.image} alt="" className="hover:scale-110 transition" /></figure>
                                            <p className="absolute top-10 right-10 bg-white p-2 bg-opacity-80 text-black font-bold px-4 rounded-2xl">{property.status}</p>

                                        </div>

                                        <div className="card-body">
                                            <h2 className="card-title">{property.title}</h2>
                                            <p>Price: ${property.min_price} - ${property.max_price}</p>
                                            <p className=""> {property.location} </p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/property/${property._id}`}>
                                                    <button className="btn border-blue-700 text-blue-700 font-semibold rounded-3xl px-8">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                            ))
                        }

                    </Swiper>


                </div>

            </div >

        </div>
    );
};

export default Advertisement;