import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
};

const RefundPolicyPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Refund Policy
                </h2>
                <p className="mb-4 text-sm text-body-color">
                  Last Updated: August 12, 2024
                </p>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <p className="mb-5 text-base font-medium text-body-color">
                      At <strong>AH Bytes</strong>, we are committed to delivering high-quality web and IT solutions that meet our clients
                       expectations. To ensure transparency, please review our refund policy below.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    1. Changes and Revisions
                  </h3>
                  <p className="mb-4 text-base font-medium text-body-color">
                     We value client satisfaction and are open to making reasonable revisions to the completed work. Any requested changes or modifications will be assessed, and we will work to address them within the scope of the original agreement.
                  </p>
                  <p className="mb-8 text-base font-medium text-body-color">
                     If additional work is required beyond the original scope, it will be subject to a new agreement and additional charges.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    2. Project Delays or Cancellations
                  </h3>
                  <p className="mb-4 text-base font-medium text-body-color">
                    If a project is delayed or canceled by the client after work has commenced, a refund will not be provided for the work completed up to that point. Any payments made for the initial stages of the project are non-refundable.
                  </p>
                  <p className="mb-8 text-base font-medium text-body-color">
                    If Ah Bytes is unable to complete a project due to unforeseen circumstances on our end, we will issue a full or partial refund, depending on the amount of work completed.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    3. No Refunds for Completed Work
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    Once a project has been completed as per the agreed-upon terms, timeline, and specifications, no refunds will be issued. This includes all development, design, and IT services provided by Ah Bytes.
                  </p>

                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    4. Exceptions
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                     Refunds may be considered on a case-by-case basis in exceptional circumstances, such as if the work delivered is significantly different from the agreed-upon specifications or if there is a breach of contract by Ah Bytes.
                  </p>
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    7. Contact Us
                  </h3>
                  <p className="mb-8 text-base font-medium text-body-color">
                    If you have any questions or concerns about our Refund Policy.
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

export default RefundPolicyPage;
