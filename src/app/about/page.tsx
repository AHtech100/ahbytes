import AboutSectionOne from "@/app/components/About/AboutSectionOne";
import AboutSectionTwo from "@/app/components/About/AboutSectionTwo";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageheading="Our Journey to a leading Software Development Partner"
        pagetitle="About"
        description="AHBYTES helps start-ups, SMEs and enterprises grow their business,Help companies and organizations deliver innovative technology solutions to power their growth by unlocking access to passionate and experienced engineers and solution providers"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <h1 className="mb-5 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Leadership Team
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 container mx-auto p-5">

        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/alihassan.webp"} fill className="object-cover" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                Ali Hassan
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              Co-Founder @CEO
            </p>
            <a
              href="https://www.linkedin.com/in/ali-hassan-2661a4201/"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/ahkamboh.webp"} fill className="object-cover" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                Ali Hamza
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              Co-Founder @CTO
            </p>
            <a
              href="https://www.linkedin.com/in/ahkamboh"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/moizhassan.webp"} fill className="object-cover" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                M. Moiz Hassan
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              Co-Founder @COO
            </p>
            <a
              href="https://www.linkedin.com/in/mmoizhassan/"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/hashir.webp"} fill className="object-cover" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                Hashir Bin Khalid
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
               Australian Brand Ambassador
            </p>
            <a
              href="https://au.linkedin.com/in/hashir-khalid-38b92a316"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/wasiqabbas.webp"} fill className="object-cover" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                Wasiq Abbas
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
               German Brand Ambassador
            </p>
            <a
              href="https://www.linkedin.com/in/wasiq-abbas-93224522a/"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
          data-wow-delay=".1s"
        >
          <div

            className="relative block aspect-[27/24] w-full"
          >
            <Image src={"/images/about/talhanaeem.webp"} fill className="object-cover grayscale" alt="image" />
          </div>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <h3>
              <div

                className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              >
                Talha Naeem
              </div>
            </h3>
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                Chinese   Brand Ambassador
            </p>
            <a
              href="https://www.linkedin.com/"
              aria-label="social-link" target="_blank"
              className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="fill-current"
              >
                <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h1 className="my-5 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Our Global Presence
      </h1>
      <div className="grid sm:pb-20 pb-10 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  container mx-auto p-5">
      <div className="text-left">
      <div className="text-lg font-semibold mb-2">Lahore Office Pakistan</div>
      <p className="text-base text-gray-500">
        AH Bytes (Private) Limited<br />
        Johar, Commercial Area Phase 2 Town <br /> Lahore, Punjab 54770 <br/>
        <Link href="mailto:info@ahbytes.com" className="hover:underline">info@ahbytes.com</Link><br />
        <Link href="https://wa.link/b9yobe" className="hover:underline">+1 517 3121641</Link>
      </p>
    </div>
    <div className="text-left">
      <div className="text-lg font-semibold mb-2">Pennsylvania Office USA</div>
      <p className="text-base text-gray-500">
        AH Bytes LLC<br />
        4049 Pennsylvania Ave Ste 2030<br />
        #292 Kansas City, MO64111, USA <br />
        <Link href="mailto:info@ahbytes.com" className="hover:underline">info@ahbytes.com</Link><br />
        <Link href="https://wa.link/b9yobe" className="hover:underline">+1 517 3121641</Link>
      </p>


    </div>
    <div className="text-left">
      <div className="text-lg font-semibold mb-2">Germany Office </div>
      <p className="text-base text-gray-500">
        AH Bytes GmbH <br />
        Industriestraße #5, Wetzlar 35580, Germany <br />
        <Link href="mailto:info@ahbytes.com" className="hover:underline">info@ahbytes.com</Link><br />
        <Link href="https://wa.link/b9yobe" className="hover:underline">+1 517 3121641</Link>
      </p>
    </div>
      </div>
    </>
  );
};

export default AboutPage;
