import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "Expert window repairs: replace just the glass with energy-efficient options and custom fits.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/window-repairs",
  },
  {
    title: "Shower Doors",
    description:
      "Custom European shower doors built from 3/8” thick glass with diverse finish options.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/shower-doors",
  },
  {
    title: "Custom Mirrors",
    description: "Expertly crafted custom mirrors that elevate your space.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/custom-mirrors",
  },
  {
    title: "Auto Glass",
    description: "NGA-certified auto glass repair and replacement.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/auto-glass",
  },
  {
    title: "Glass Doors & Walls",
    description:
      "Elegant glass doors and walls built with premium glass and customizable hardware.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/glass-doors-walls",
  },
  {
    title: "Storefront Solutions",
    description:
      "Expert commercial glass for storefronts, entry doors, and more.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/storefronts",
  },
];

export default function Services() {
  return (
    <div className="section-dark w-full">
      <div className="py-12 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold mb-8 card-dark-heading">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-dark p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <h2 className="text-2xl font-semibold card-dark-heading">
                  {service.title}
                </h2>
              </div>
              <p className="text-base card-dark-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
