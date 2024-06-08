
const SoldDataRow = ({prop}) => {
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{prop?.title}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{prop?.location}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{prop?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{prop?.buyerName}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <p className='text-gray-900 whitespace-no-wrap'>{prop?.amount}</p>
        </td>                    
        
        







    </tr>
    );
};

export default SoldDataRow;