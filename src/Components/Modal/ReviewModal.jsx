import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import AddReviewForm from "../Form/AddReviewForm";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/utils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewModal = ({ isOpen, setIsReviewModalOpen, property, refetch }) => {

    const axiosSecure = useAxiosSecure();
    const [propertyData, setPropertyData] = useState(property);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const { mutateAsync } = useMutation({
        mutationFn: async reviewData => {
            const {data} = await axiosSecure.post('/reviews', reviewData)
            return data;
        },
        onSuccess: () =>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review has been added Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/dashboard/myReviews')
            setLoading(false)
        }

    })

    // const handleSubmit = async e => {
    //     e.preventDefault()
    //     setLoading(true)
    //     const form = e.target;
    //     const propertyId = form.propertyId.value;
    //     const title = form.title.value;
    //     const description = form.description.value;
    //     // const authorName = form.authorName.value;
    //     // const email = form.email.value;
    //     const timestamp = Date.now();
    //     const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    //     const formattedDate = new Intl.DateTimeFormat('en-CA', options).format(timestamp)
    //     // const authorImageFile = form.image.files[0];
    //     // const agentName = form.agentName.value;
    //     const author = {
    //         name: user?.displayName,
    //         image: user?.photoURL,
    //         email: user?.email
    //     }
        

    //     try {
    //         setLoading(true)
            
    //         const reviewData = {title, description, timestamp, propertyId, formattedDate, author}
            
    //         await mutateAsync(reviewData)

    //     }
    //     catch (err) {
    //         console.log(err)
    //         toast.error(err.message)
    //         setLoading(false)
    //     }
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const propertyId = form.propertyId.value;
        const title = form.title.value;
        const description = form.description.value;
        const authorName = form.authorName.value;
        const authorEmail = form.email.value;
        const timestamp = Date.now();
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        const formattedDate = new Intl.DateTimeFormat('en-CA', options).format(timestamp)

        const authorImage = form.image.value;
        const agentName = form.agentName.value;
        console.log(title, description, timestamp, formattedDate, authorName, authorEmail, authorImage, propertyId, agentName)

        try {
            setLoading(true)
            const reviewData = {title, description, timestamp, authorName, authorEmail, authorImage, propertyId, formattedDate, agentName}
            await mutateAsync(reviewData)

        }
        catch (err) {
            console.log(err)
            toast.error(err.message)
            setLoading(false)
        }
    }

    return (
        <div>
            
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-10'
                    onClose={() => setIsReviewModalOpen(false)}
                >
                    <TransitionChild
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </TransitionChild>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <DialogPanel className='w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <DialogTitle
                                        as='h3'
                                        className='text-lg font-semibold text-center leading-6 text-gray-900'
                                    >
                                        Add A Comment
                                    </DialogTitle>
                                    <div className='mt-2 w-full'>

                                        <AddReviewForm
                                            property={property}
                                            handleSubmit={handleSubmit}
                                            user={user}
                                            loading={loading}
                                            
                                        >
                                        </AddReviewForm>

                                    </div>
                                    <hr className='mt-8 ' />
                                    <div className='mt-2 flex justify-end '>
                                        <button
                                            type='button'
                                            className='btn inline-flex rounded-md border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700'
                                            onClick={() => setIsReviewModalOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    );
};

export default ReviewModal;