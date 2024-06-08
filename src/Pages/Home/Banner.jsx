import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen relative mt-4 rounded-xl" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(211, 210, 211, 0.1)), url(https://i.ibb.co/tCMYLYL/young-family-looking-at-beautiful-new-home.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-7xl font-extrabold text-white">Your Ideal Sanctuary Awaits at Metro Homes</h1>
                        
                        <Link to="/login">
                        <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;

