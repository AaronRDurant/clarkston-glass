"use client";

import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Services = () => {
  return (
    <div
      className="pb-4 md:px-12 lg:px-4 transition-all duration-300"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      {/* Services Section */}
      <div className="mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-left">
          What Can We Do for You?
        </h2>

        {/* Introduction */}
        <p className="text-lg mb-10 text-left text-base max-w-3xl mx-auto">
          We specialize in providing top-tier glass solutions for residential
          and commercial needs. Whether you&apos;re looking for custom shower
          doors or storefront glass, we ensure exceptional craftsmanship and
          customer service.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-3 gap-4 mb-12 justify-items-start">
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Shower Doors</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Window Repair</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Custom Mirrors</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Glass Railings</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Storefronts</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg whitespace-nowrap">Auto Glass</span>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8 text-left">
          <Link
            href="/services"
            className="inline-flex items-center bg-blue-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Learn More
            <ChevronRightIcon className="h-5 w-5 ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
