import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "Expert window repairs: replace just the glass with energy-efficient options and custom fits.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
  {
    title: "Cabinet Glass & Tabletops",
    description:
      "Custom-cut glass for cabinet doors and tabletops — including textured, patterned, and antique options.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
  {
    title: "Custom Mirrors",
    description: "Expertly crafted custom mirrors that elevate your space.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
  {
    title: "Auto Glass",
    description: "NGA-certified auto glass repair and replacement.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
  {
    title: "Glass Doors & Walls",
    description:
      "Elegant glass doors and walls built with premium glass and customizable hardware.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
  {
    title: "Storefront Solutions",
    description:
      "Expert commercial glass for storefronts, entry doors, and more.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
  },
];

export default function Services() {
  return (
    <div className="section-dark w-full">
      <div className="section-wrapper py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 card-dark-heading">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-dark p-5 md:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 mr-4 rounded"
                />
                <h2 className="text-xl md:text-2xl font-semibold card-dark-heading">
                  {service.title}
                </h2>
              </div>
              <p className="text-base md:text-base leading-snug card-dark-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
