import { FaApple, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiGooglePlayLogoDuotone } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="footer px-5 py-20 bg-blue-700 flex flex-col items-center justify-center text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 ">
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">Join us</h6>
                    <a className="link link-hover">Become an Agent</a>
                    <a className="link link-hover">Get Referrals</a>
                    <a className="link link-hover">Careers</a>
                    <br />
                    <h6 className="footer-title">Find homes faster</h6>
                    <div className="flex items-center gap-2 bg-slate-900 py-2 px-4 rounded-lg">
                        <FaApple size={30} />
                        <div>
                            <p className="text-xs">Download on the</p>
                            <h1 className="md:text-2xl">AppStore</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-900 py-2 px-4 rounded-lg">
                        <PiGooglePlayLogoDuotone size={30} />
                        <div>
                            <p className="text-xs">GET IT ON</p>
                            <h1 className="md:text-2xl">Google Play</h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">About us</h6>
                    <a className="link link-hover">Why Metro Homes?</a>
                    <a className="link link-hover">Community Impact</a>
                    <a className="link link-hover">Diversity & Inclusion</a>
                    <a className="link link-hover">Press kit</a>
                    <a className="link link-hover">Investors</a>
                    <a className="link link-hover">Blog</a>

                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="footer-title">Contact us-</h6>
                    <p>Storgatan 10, Linköping 587 45
                        <br />
                        Östergötland, Sweden
                    </p>
                    
                    <div className="mt-6">
                        <p className="font-bold">Opening hours-</p>
                        <p>Monday-Thursday : 10:00 - 16:00</p>
                        <p>Fiday: 11:00 - 15:00</p>
                        <p>Saturday - Sunday : Closed</p>
                    </div>
                    <div className="flex flex-col ">
                        <h6 className="footer-title mt-6">Follow us-</h6>
                        <div className="flex items-center space-x-2">
                            <FaLinkedin size={24} />
                            <FaInstagram size={24} />
                            <FaFacebook size={24} />

                        </div>


                    </div>


                </div>

            </div>
            <div className="w-full">
            <hr className="border w-full border-dashed" />

            </div>
            
            <div>
                <p className="">Copyright © 2024 - JobVista |  info@metrohomes.se | 013-010 55 00</p>
            </div>

           



        </footer>

    );
};

export default Footer;