"use client";

import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "Expert window repairs: replace just the glass with energy-efficient options and custom fits. We offer comprehensive solutions that save you money while enhancing energy efficiency.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/window-repairs",
  },
  {
    title: "Shower Doors",
    description:
      "Custom European shower doors built from 3/8” thick glass with diverse finish options. Our installations provide both safety and modern elegance for your bathroom.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/shower-doors",
  },
  {
    title: "Custom Mirrors",
    description:
      "Expertly crafted custom mirrors that elevate your space. Designed with precision, our mirrors combine aesthetic appeal with practical functionality.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/custom-mirrors",
  },
  {
    title: "Auto Glass",
    description:
      "NGA-certified auto glass repair and replacement. We deliver fast, reliable services to get your vehicle back on the road safely and efficiently.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/auto-glass",
  },
  {
    title: "Glass Doors & Walls",
    description:
      "Elegant glass doors and walls built with premium glass and customizable hardware. Enhance any space with our modern, stylish installations.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/glass-doors-walls",
  },
  {
    title: "Storefront Solutions",
    description:
      "Expert commercial glass for storefronts, entry doors, and more. With decades of experience, we combine durability and style to meet your business needs.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/storefronts",
  },
];

export default function ServicesPage() {
  return (
    <div className="mt-40 mb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-base text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
