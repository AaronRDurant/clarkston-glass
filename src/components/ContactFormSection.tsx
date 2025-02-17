"use client";

import { useState } from "react";

const ContactFormSection = () => {
  const [serviceType, setServiceType] = useState("Shower Door");
  const [message, setMessage] = useState("How can we help?");

  // Button click handler
  const handleButtonClick = (service: string) => {
    setServiceType(service);
    setMessage(
      `Hi, I need help with my ${service}. Can you provide more information or a quote?`
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      {/* Section Header */}
      <h2 className="text-3xl font-extrabold text-left text-gray-900 dark:text-gray-100 mb-8">
        I&#39;m interested in...
      </h2>

      {/* Service Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          "Glass Shower Doors & Enclosures",
          "Window Repair & Glass Replacement",
          "Auto Glass Repair & Windshield Replacement",
          "Glass Railings",
          "Table Tops",
          "Custom Mirrors",
          "Glass Doors & Walls",
          "Cabinet Glass",
          "Screen Repair",
          "Storefronts",
        ].map((service) => (
          <button
            key={service}
            className="bg-blue-500 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-sm flex items-center justify-center"
            onClick={() => handleButtonClick(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone Field (Optional) */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
            >
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm"
              placeholder="Enter your phone number (optional)"
            />
          </div>

          {/* Service Type Dropdown */}
          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
            >
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm"
            >
              <option value="Shower Door">Shower Door</option>
              <option value="Window Repair">Window Repair</option>
              <option value="Commercial Glass">Commercial Glass</option>
              <option value="Auto Glass">Auto Glass</option>
              <option value="Doors">Doors</option>
              <option value="Glass Railings">Glass Railings</option>
              <option value="Mirrors">Mirrors</option>
              <option value="Table Tops">Table Tops</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message Box */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-sm"
              placeholder={message.replace(/'/g, "&#39;")} // Escape apostrophes
              rows={4}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
