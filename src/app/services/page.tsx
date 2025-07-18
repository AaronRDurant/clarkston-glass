"use client";

import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "We replace foggy, broken, or inefficient glass without the cost of full window replacement. Choose from Low-E and Argon-filled insulated units, or let us custom-fit trapezoids and other special shapes. We can even match existing window grid patterns.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "Energy Efficient • Residential & Commercial",
  },
  {
    title: "Cabinet Glass & Tabletops",
    description:
      "From textured cabinet inserts to polished tabletop glass, we cut and finish pieces to match your design goals. Available in ribbed, frosted, antique, patterned, and more — ideal for kitchen upgrades or custom furniture.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "Textured, Antique & Custom Cut",
  },
  {
    title: "Custom Mirrors",
    description:
      "Our custom mirrors add light, style, and space to any room. Whether framed or frameless, we precision-cut each mirror to fit your bathroom, hallway, gym, or studio wall. Installation included.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "Residential & Commercial • Made to Measure",
  },
  {
    title: "Auto Glass",
    description:
      "Certified auto glass repair and replacement for cars, trucks, and SUVs. Our NGA-certified team ensures a safe, professional install that gets you back on the road fast.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "NGA-Certified • Fast Turnaround",
  },
  {
    title: "Glass Doors & Walls",
    description:
      "Elegant, frameless or framed glass doors and interior walls with custom hardware options. Great for offices, showers, or modern home upgrades — built to spec with top-tier materials.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "Residential & Commercial • Custom Hardware",
  },
  {
    title: "Storefront Solutions",
    description:
      "We design, build, and install commercial-grade storefront systems — including entry doors, fixed panels, and curtain walls. Durable and clean installs tailored to your brand.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    badge: "Commercial-Grade • Entry Systems & Panels",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f9f9f9] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Glass Solutions Tailored to Your Space
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            From mirrors and tabletops to custom storefronts, our team brings
            clarity, precision, and craftsmanship to every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer transform hover:scale-[1.015] hover:shadow-md transition-all duration-300 flex items-start bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex-shrink-0 mr-5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={72}
                  height={72}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {service.title}
                </h2>
                <div className="inline-block px-2 py-1 text-[11px] md:text-sm font-semibold text-blue-800 bg-blue-100 rounded mb-3">
                  {service.badge}
                </div>
                <p className="text-sm md:text-[17px] text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
