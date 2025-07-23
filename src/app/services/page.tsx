"use client";

import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "We replace foggy, broken, or inefficient glass without the cost of full window replacement. Choose energy-efficient Low-E and Argon-filled units, or let us custom-fit trapezoids and other special shapes. We can even match your existing window grid patterns.",
    icon: "/images/Clarkston-Glass-window-repair.jpg",
    badge: "Energy Efficient • Residential & Commercial",
  },
  {
    title: "Cabinet Glass & Tabletops",
    description:
      "We custom-cut glass for cabinet doors and tabletop surfaces in a wide range of textures, finishes, and shapes. Choose from ribbed, frosted, antique, patterned, and other specialty styles to enhance your furniture, kitchen cabinets, or dining areas. From sleek modern to vintage-inspired, every piece is precision-cut to match your design vision.",
    icon: "/images/Clarkston-Glass-table-top.jpg",
    badge: "Textured, Antique & Custom Cut",
  },
  {
    title: "Custom Mirrors",
    description:
      "We design and install custom mirrors that elevate any space — from bathrooms and hallways to gyms and studio walls. Choose from beveled, antique, or wall-mounted styles, framed or frameless, all precision-cut to fit your layout and aesthetic.",
    icon: "/images/Clarkston-Glass-custom-mirror.jpg",
    badge: "Residential & Commercial • Made to Measure",
  },
  {
    title: "Auto Glass",
    description:
      "We repair and replace windshields, door glass, and back glass for all makes and models — fast. Our NGA-certified techs offer mobile service, rock chip repair, and work with all major insurance providers to get you safely back on the road.",
    icon: "/images/Clarkston-Glass-auto-glass-repair-replacement.jpg",
    badge: "Mobile Service • Insurance Accepted",
  },
  {
    title: "Glass Doors & Walls",
    description:
      "From luxury glass entry doors to sleek interior partitions, we custom-build frameless and framed solutions with premium hardware. Popular in offices, churches, and high-end storefronts, our heavy-glass systems deliver a refined, upscale finish — built to your exact specs.",
    icon: "/images/Clarkston-Glass-door-wall.jpg",
    badge: "Frameless Entry Systems • Custom Hardware",
  },
  {
    title: "Storefront Solutions",
    description:
      "With over 30 years of experience, we partner with business owners, contractors, and developers to deliver clean, durable storefront systems. From glass entry doors and fixed panels to conference tabletops and curtain walls — every install is tailored to your space and brand.",
    icon: "/images/Clarkston-Glass-commercial-storefront.jpg",
    badge: "Commercial-Grade • Entry Systems & Custom Installs",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f9f9f9] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3">
            Built to Reflect Your Vision
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Custom Glass That Elevates Every Space
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            From mirrors and tabletops to storefronts and shower enclosures, we
            design and install precision-cut glass solutions that look sharp,
            fit perfectly, and stand the test of time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer transform hover:scale-[1.015] hover:-translate-y-[1px] hover:shadow-md transition-all duration-300 flex items-start bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex-shrink-0 mr-4 md:mr-6">
                <Image
                  src={service.icon}
                  alt={`Clarkston Glass — ${service.title}`}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {service.title}
                </h2>
                <div className="inline-block px-2 py-1 text-[11px] md:text-sm font-semibold text-blue-800 bg-blue-100 rounded mb-2">
                  {service.badge}
                </div>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed md:leading-normal">
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
