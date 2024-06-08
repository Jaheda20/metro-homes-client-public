import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';



const MakeOffer = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');

    const { data: property = [], isLoading, refetch } = useQuery({
        queryKey: ['property', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/property/${id}`)
            return data
        }
    })

    const { mutateAsync } = useMutation({
        mutationFn: async offerData =>{
            const {data} = await axiosSecure.post('/offers', offerData);
            return data
        },
        onSuccess: ()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Offer submitted successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/propertyBought')
        }
    })

    const handleOfferSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const location = form.location.value;
        const agentName = form.agentName.value;
        const agentEmail = form.agentEmail.value;
        const buyerName = form.name.value;
        const email = form.email.value;
        const min_price = parseFloat(form.minPrice.value);
        const max_price = parseFloat(form.maxPrice.value);
        
        if(amount < min_price || amount > max_price){
            toast.error(`Offer amount must be between ${min_price} and ${max_price}`)
            return
        }

        const offerData = { propertyId: property._id, title, location, agentName, agentEmail, buyerName, email, amount, status: 'Pending'
        } 
        console.log(offerData)
        await mutateAsync(offerData)
    }


    return (
        <div>
            <h2 className="text-2xl font-semibold my-10">Make your offer for the Property: {property._id}</h2>

            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleOfferSubmit} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="title" className="text-sm">Property Title</label>
                                <input id="title" name="title" defaultValue={property?.title} type="text" placeholder="Property Title" className="w-full rounded-md focus:ring focus:ring-opacity-75" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Location</label>
                                <input id="location" name="location" defaultValue={property?.location} type="text" placeholder="Location" className="w-full rounded-md text-gray-700 focus:ring focus:ring-opacity-75" readOnly/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="minPrice" className="text-sm">Min Price</label>
                                <input id="minPrice" name="minPrice" defaultValue={property?.min_price} type="number" placeholder="Min Price" className="w-full rounded-md focus:ring focus:ring-opacity-75" readOnly/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="maxPrice" className="text-sm">Max Price</label>
                                <input id="maxPrice" name="maxPrice" defaultValue={property?.max_price} type="number" placeholder="Max Price" className="w-full rounded-md focus:ring focus:ring-opacity-75" readOnly/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="agentName" className="text-sm">Agent Name</label>
                                <input id="agentName" name="agentName" defaultValue={property?.agent?.name} type="text" placeholder="Agent Name" className="w-full rounded-md focus:ring focus:ring-opacity-75" readOnly/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="agentEmail" className="text-sm">Agent Email</label>
                                <input id="agentEmail" name="agentEmail" defaultValue={property?.agent?.email} type="email" placeholder="Agent Email" className="w-full rounded-md focus:ring focus:ring-opacity-75" readOnly />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Buyer Name</label>
                                <input id="name" name="name" defaultValue={user?.displayName} type="text" placeholder="Buyer Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 focus:dark:ring-violet-600 dark:border-gray-300" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Buyer Email</label>
                                <input id="email" name="email" defaultValue={user?.email} type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 focus:dark:ring-violet-600 dark:border-gray-300" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Offered Amount</label>
                                <input id="offer" name="offer" value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Offer Amount" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-700 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Purchase Date</label>
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>
                        </div>

                    </fieldset>
                    <div className="flex justify-start">
                        <button className="btn px-8 border-blue-700 text-white bg-blue-700 rounded-2xl">Make Offer</button>
                    </div>

                </form>
            </section>


        </div >
    );
};

export default MakeOffer;