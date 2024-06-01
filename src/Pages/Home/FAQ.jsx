
const FAQ = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center ">
                <div className="md:w-1/2">
                    <img src="https://sharonsteelerealestate.com/wp-content/uploads/2022/06/pexels-alena-darmel-7641857-1280x853.jpg" alt="" className="w-full " />
                </div>
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 md:w-1/2">
                    <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
                    <p className="mt-4 mb-8 dark:text-gray-600">Got Questions? We have got answers.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What services does Metro Homes offer?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Metro Homes offers a wide range of services including buying, selling, renting, property management, and real estate consulting. We also provide neighborhood guides and market analysis to help you make informed decisions.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the process for buying a home through Metro Homes?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">The process starts with a consultation to understand your needs. We then provide a curated list of properties, arrange viewings, assist with negotiations, and guide you through the closing process to ensure a smooth transaction. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Do you provide property management services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, Metro Homes offers comprehensive property management services including tenant screening, rent collection, maintenance, and repairs to ensure your property is well-managed and profitable. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I get pre-approved for a mortgage?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Getting pre-approved for a mortgage involves submitting financial documents to a lender, who will assess your creditworthiness and determine how much you can borrow. We can recommend trusted lenders to assist you with this process. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What should I know before renting a property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Before renting a property, consider your budget, desired location, lease terms, and any additional costs such as utilities and maintenance. Our agents can help you understand the rental process and find a property that meets your needs. </p>
                        </details>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;