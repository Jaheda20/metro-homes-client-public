
const ContactBanner = () => {
    return (
        <div className="hero min-h-screen relative mt-4 rounded-xl" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(211, 210, 211, 0.2)), url(https://laurenalane.com/wp-content/uploads/2024/07/PROS-AND-CONS-OF-MOVING-BEFORE-YOU-SELL-1536x1024.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            <div className="hero-content text-center text-white">
                <div className="max-w-2xl">
                    <h3 className="text-2xl mb-3 font-semibold">CUSTOMER SERVICE</h3>
                    <h1 className="mb-5 text-7xl font-extrabold ">What can we help you with?</h1>
                    <p className="mb-5 text-xl">Find the answer to your question or ask our customer service your own!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;