import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
                </h2>
                <p className="mb-4 text-sm text-body-color">
                  Last Updated: August 12, 2024
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <p className="mb-5 text-base font-medium text-body-color">
                    At <strong>AH Bytes</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    1. Information We Collect
                  </h3>
                  <p className="mb-4 text-base font-medium text-body-color">
                    <strong>Personal Information:</strong> When you contact us, request a quote, or engage our services, we may collect personal details such as your name, email address, phone number, and company name.
                  </p>
                  <p className="mb-4 text-base font-medium text-body-color">
                    <strong>Technical Information:</strong> We may collect data about your device, IP address, browser type, and usage patterns to improve our website and services.
                  </p>
                  <p className="mb-8 text-base font-medium text-body-color">
                    <strong>Cookies:</strong> Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    2. How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-7">
                  <li className="mb-4 text-base font-medium text-body-color">
                    To provide and manage our services, including web development and IT solutions.
                  </li>
                  <li className="mb-4 text-base font-medium text-body-color">
                    To communicate with you regarding your projects, inquiries, or requests.
                  </li>
                  <li className="mb-4 text-base font-medium text-body-color">
                    To improve our website, services, and user experience.
                  </li>
                  <li className="mb-8 text-base font-medium text-body-color">
                    To comply with legal obligations and protect our rights.
                  </li>
                  </ul>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    3. Data Sharing and Disclosure
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted service providers who assist us in delivering our services, subject to confidentiality agreements. We may also disclose your information if required by law or to protect our rights.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    4. Data Security
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    We take reasonable measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    5. Your Rights
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time.
                  </p>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    6. Changes to This Policy
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date. We encourage you to review this policy periodically.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    7. Contact Us
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    If you have any questions or concerns about our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
