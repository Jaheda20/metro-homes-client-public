

const PropertyDataRow = ({property, refetch}) => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{property?.location}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.agent.name}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.agent.email}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {property?.status}
            </td>
            <td>
                <div className="tooltip" data-tip="Make Admin">
                    <button className="btn hover:bg-blue-700 hover:text-white">Verify</button>
                </div>
            </td>
            <td>
                <div className="tooltip" data-tip="Make Agent">
                    <button className="btn hover:bg-blue-700 hover:text-white">Reject</button>
                </div>
            </td>
            

        </tr>
    );
};

export default PropertyDataRow;