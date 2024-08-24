import Breadcrumb from "../components/Common/Breadcrumb";
import { Metadata } from "next";
import Services from "../components/Features/Services";
export const metadata: Metadata = {
    title: "Services",

};

const ContactPage = () => {
    return (
        <>
            <Breadcrumb
                pageheading="Services"
                pagetitle="Services"
                description="We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals."
            />
            <Services/>
        </>
    );
};

export default ContactPage;
