"use client";

import { useState, FormEvent, ChangeEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    type: '', // Business or Personal
    service: '',  // Added service field
    customService: '', // Custom service input
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    type: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', country: '', type: '', service: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.type.trim()) {
      newErrors.type = 'Type of service is required';
      isValid = false;
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Service selection is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setStatus("Sending...");
    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Order submitted successfully");
        setFormData({ name: '', email: '', country: '', type: '', service: '', customService: '', message: '' });
      } else {
        setStatus("Failed to submit order");
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus("An error occurred");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4  mt-5">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
               Place Your Order
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Fill in your details, and our team will get back to you with further steps.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  
                  {/* Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Country Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="country"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Enter your country"
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.country ? 'border-red-500' : ''}`}
                      />
                      {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
                    </div>
                  </div>

                  {/* Type Field (Business or Personal) */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="type"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Type of Service
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.type ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select Type</option>
                        <option value="Business">Business</option>
                        <option value="Personal">Personal</option>
                      </select>
                      {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type}</p>}
                    </div>
                  </div>

                  {/* Service Selection Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="service"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Select Service or Enter Custom Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.service ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a Service</option>
                        <option value="WordPress">WordPress</option>
                        <option value="SEO">SEO</option>
                        <option value="Web Flow">Web Flow</option>
                        <option value="Wix">Wix</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Custom Development">Custom Development</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Generative AI">Generative AI</option>
                        <option value="MVP">MVP</option>
                        <option value="SaaS">SaaS</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Business Registration">Business Registration</option>
                        <option value="Shopify">Shopify</option>
                        <option value="WooCommerce">WooCommerce</option>
                        <option value="B2B Services">B2B Services</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Custom">Custom (Enter your service below)</option>
                      </select>
                      {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Custom Service Input (shown only if Custom is selected) */}
                  {formData.service === 'Custom' && (
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="customService"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Enter Custom Service
                        </label>
                        <input
                          type="text"
                          name="customService"
                          value={formData.customService}
                          onChange={handleChange}
                          placeholder="Enter your custom service"
                          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Message Field */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your Message"
                        className={`border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none ${errors.message ? 'border-red-500' : ''}`}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      {status && <p className="mt-4 text-base text-body-color">{status}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
