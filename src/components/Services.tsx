"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Services = () => {
  return (
    <div
      className="pb-4 md:px-12 lg:px-6 transition-all duration-300"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      {/* Services Section */}
      <div className="mx-auto">
        <h2 className="text-[36px] md:text-[48px] font-extrabold mb-6 text-left text-[var(--text)]">
          What Can We Do for You?
        </h2>

        {/* Introduction */}
        <p className="text-lg mb-12 text-left text-[var(--text)] max-w-3xl mx-auto">
          We specialize in providing top-tier glass solutions for residential
          and commercial needs. Whether you&apos;re looking for custom shower
          doors or storefront glass, we ensure exceptional craftsmanship and
          customer service.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-start">
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Shower Doors</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Window Repair</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Custom Mirrors</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Glass Railings</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Storefronts</span>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
            <span className="text-lg">Auto Glass</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
