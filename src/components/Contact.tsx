"use client";

import { useState } from "react";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Shower Door",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="section-dark w-full antialiased text-gray-100 leading-relaxed tracking-tight">
      <div className="section-wrapper py-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 card-dark-heading text-left md:text-center tracking-tight leading-tight">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Office Info & Map (left column) */}
          <div className="flex flex-col space-y-8">
            <div className="card-dark p-5 md:p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                Clarkston Glass
              </h3>
              <div className="flex items-center space-x-4 justify-start">
                <PhoneIcon className="h-5 w-5 text-blue-400 opacity-80" />
                <a
                  href="tel:2486255911"
                  className="text-base md:text-lg font-medium hover:underline leading-snug tracking-normal"
                >
                  248-625-5911
                </a>
              </div>
              <div className="flex items-center space-x-4 justify-start">
                <MapPinIcon className="h-5 w-5 text-green-400 opacity-80" />
                <address className="not-italic text-base md:text-lg leading-snug tracking-normal">
                  6577 Dixie Hwy, Clarkston, MI 48346
                </address>
              </div>
              <div className="flex items-center space-x-4 justify-start">
                <ClockIcon className="h-5 w-5 text-purple-400 opacity-80" />
                <span className="text-base md:text-lg leading-snug tracking-normal">
                  Mon–Fri: 8 am – 5 pm, Sat: 8 am – 12 pm
                </span>
              </div>
            </div>
            <div className="card-dark rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5862.8836647836615!2d-83.4132661!3d42.7155382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824977850cbb25f%3A0x288c1ce52cbbbd2b!2sClarkston%20Glass!5e0!3m2!1sen!2sus!4v1743463797138!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Contact Form (right column) */}
          <div className="card-dark p-5 md:p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base md:text-lg font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-950 text-white tracking-normal leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base md:text-lg font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-950 text-white tracking-normal leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base md:text-lg font-semibold mb-2"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-950 text-white tracking-normal leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-base md:text-lg font-semibold mb-2"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-950 text-white tracking-normal leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div>
                <label
                  htmlFor="message"
                  className="block text-base md:text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-700 rounded-lg bg-neutral-950 text-white tracking-normal leading-snug focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-sm md:text-base font-medium py-2 md:py-2.5 px-5 md:px-6 rounded-md shadow-sm hover:bg-blue-600 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
