import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import LoginReminder from "./LoginReminder";

const CustomerService = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <LoginReminder></LoginReminder>
        </div>
    );
};

export default CustomerService;