import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Info from "./Info";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
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