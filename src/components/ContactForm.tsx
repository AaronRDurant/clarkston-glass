"use client";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
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

          {/* Phone Field (Optional) and Service Type Dropdown */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Field */}
            <div>
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
                placeholder="Enter your phone number"
              />
            </div>

            {/* Service Type Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
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
              placeholder="How can we help?"
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

export default ContactForm;
