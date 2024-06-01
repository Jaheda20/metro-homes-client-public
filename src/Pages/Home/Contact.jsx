import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 my-4">
            <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-100">
                <img src="https://i.ibb.co/Fs4Mqj6/woman-working-on-laptop-in-the-office-looking-at-the-screen-and-typing-image-free-photo.jpg" alt="" className="" />
                <div className="flex flex-col items-center justify-center my-10 px-10">
                    <p className="text-xl mb-5">SIGN IN</p>
                    <h1 className="text-4xl font-semibold mb-4">My Pages</h1>
                    <p className="text-center">On My Pages you can find everything you need as an user with us related to your accommodation, your purchase, and you can easily make a service report. </p>

                    <Link to="/login" className="mt-10 underline text-blue-700 text-lg">Login Here</Link>
                </div>
            </div>

            <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-100">
                <img src="https://i.ibb.co/5n3YXkB/why-use-a-real-estate-agent.jpg" alt="" className="" />
                <div className="flex flex-col items-center justify-center my-10 px-10">
                    <p className="text-xl mb-5">CONTACT US</p>
                    <h1 className="text-4xl font-semibold mb-4">Customer Service</h1>
                    <p className="text-center">Do you want to get in touch with us at Metro Homes? You are always welcome to contact us either by phone, email, or at our office. </p>

                    <Link to="/customerService" className="mt-10 underline text-blue-700 text-lg">To Customer Service</Link>
                </div>
            </div>
            
            
        </div>
    );
};

export default Contact;