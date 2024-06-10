import { Helmet } from "react-helmet-async";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Info from "./Info";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Metro Homes || Home</title>
            </Helmet>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Info></Info>          
            <Contact></Contact>            
            <Testimonials></Testimonials>

            
            <FAQ></FAQ>            
            <div className="w-full">
                <hr className="w-full border-8 border-slate-500"/>
            </div>
            
            
            
        </div>
    );
};

export default Home;