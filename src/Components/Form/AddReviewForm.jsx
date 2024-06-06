

const AddReviewForm = ({ handleSubmit, property, user, loading }) => {

    

    return (
        <div>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                <form onSubmit={handleSubmit} >
                    <div className='grid grid-cols-2 gap-10'>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='id' className='block text-gray-600'>
                                Property Id
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='propertyId'
                                id='propertyId'
                                type='text'
                                defaultValue={property._id}
                                readOnly
                                placeholder='Property id'
                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Property Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='title'
                                id='title'
                                type='text'
                                defaultValue={property.title}
                                readOnly
                                placeholder='Property Title'
                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='agentName' className='block text-gray-600'>
                                Agent name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='agentName'
                                id='agentName'
                                type='text'
                                defaultValue={property.agent.name}
                                readOnly
                                placeholder="Agent's Name"
                                required
                            />
                        </div>


                        <div className='space-y-1 text-sm'>
                            <label htmlFor='author name' className='block text-gray-600'>
                                Author Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='authorName'
                                id='authorName'
                                type='text'
                                defaultValue={user?.displayName}
                                placeholder="Author's Name"

                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='author name' className='block text-gray-600'>
                                Author's Email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='email'
                                id='email'
                                type='email'
                                defaultValue={user?.email}
                                placeholder="Author's Email"

                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='author image' className='block text-gray-600'>
                                Author Image
                            </label>
                            <input                               
                                name='image'
                                id='authorImage'
                                defaultValue={user?.photoURL || ''}
                            />
                            <img src={user?.photoURL} alt="" className="w-40" />
                        </div>

                        {/* <div className='space-y-1 text-sm'>
                            <label htmlFor='image' className='block text-gray-600'>
                                Author Image
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='image'
                                id='authorImage'
                                type='file'
                                accept='image/*'
                            />
                            {user?.photoURL && <img src={user.photoURL} alt="Author" className="w-40" />}
                        </div> */}


                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'

                                className='block rounded-md w-full h-32 px-4 py-3 text-gray-800  border border-blue-700 '
                                name='description'
                            ></textarea>
                        </div>
                        <div>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-blue-700 rounded-md '
                                name='timestamp'
                                id='timestamp'
                                type='hidden'
                                hidden
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='btn w-full p-3 mt-5 text-center font-semibold text-white bg-blue-700 transition duration-200 rounded-xl border-blue-700'
                    >
                        Post Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReviewForm;