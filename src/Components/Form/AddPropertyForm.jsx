
const AddPropertyForm = ({handleSubmit, agent}) => {
    return (
        <div>
            <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='title' className='block text-gray-600'>
                                    Property title
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                    name='Title'
                                    id='Title'
                                    type='text'
                                    placeholder='Title'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='agent name' className='block text-gray-600'>
                                    Agent Name
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                    name='agent'
                                    
                                    id='agent'
                                    type='text'
                                    placeholder='Agent Name'
                                    required
                                />
                            </div>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='agent email' className='block text-gray-600'>
                                    Agent Email
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                    name='email'
                                    defaultValue={agent.email}
                                    id='agent_email'
                                    type='email'
                                    placeholder='Agent Email'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='bg-blue-700 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                                                Upload Image
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                                
                            </div>

                            
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='location' className='block text-gray-600'>
                                    Location
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                    name='location'
                                    id='location'
                                    type='text'
                                    placeholder='Location'
                                    required
                                />
                            </div>

                            {/* <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                    <div className='flex flex-col w-max mx-auto text-center'>
                                        <label>
                                            <input
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                                Upload Image
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div> */}
                            <div className='flex justify-between gap-2'>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='min price' className='block text-gray-600'>
                                        Minimum Price
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                        name='minPrice'
                                        id='min_price'
                                        type='number'
                                        placeholder='Minimum Price'
                                        required
                                    />
                                </div>

                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='max price' className='block text-gray-600'>
                                        Maximum Price
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                        name='maxPrice'
                                        id='max_price'
                                        type='number'
                                        placeholder='Maximum Price'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between gap-2'>
                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='bedrooms' className='block text-gray-600'>
                                        Bedrooms
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                        name='bedrooms'
                                        id='bedrooms'
                                        type='number'
                                        placeholder='Bedrooms'
                                        required
                                    />
                                </div>

                                <div className='space-y-1 text-sm'>
                                    <label htmlFor='bathrooms' className='block text-gray-600'>
                                        Bathrooms
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-blue-700 focus:outline-blue-500 rounded-md '
                                        name='bathrooms'
                                        id='bathrooms'
                                        type='number'
                                        placeholder='Bathrooms'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='description' className='block text-gray-600'>
                                    Description
                                </label>

                                <textarea
                                    id='description'
                                    className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-700 focus:outline-blue-500 '
                                    name='description'
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-700'
                    >
                        Save & Continue
                    </button>
                </form>
            </div>
        </div>
    )
};


export default AddPropertyForm;