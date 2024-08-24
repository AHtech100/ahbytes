import Breadcrumb from "../components/Common/Breadcrumb";
import Contact from "../components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",

};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageheading="Contact Us"
        pagetitle="Contact"
        description="We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
