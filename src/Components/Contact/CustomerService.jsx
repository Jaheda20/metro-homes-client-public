import { Fade } from "react-awesome-reveal";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import LoginReminder from "./LoginReminder";

const CustomerService = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <Fade delay={500}>
                <LoginReminder></LoginReminder>
            </Fade>

        </div>
    );
};

export default CustomerService;