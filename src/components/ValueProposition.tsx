import Image from "next/image";

const services = [
  {
    title: "Window Repairs",
    description:
      "Expert repairs for broken or damaged windows, ensuring safety and clarity.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg", // Update path as needed
    link: "/services/window-repairs",
  },
  {
    title: "Custom Mirrors",
    description: "Tailored mirror designs to fit your unique space.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/custom-mirrors",
  },
  {
    title: "Storefront Solutions",
    description: "High-quality glass installations for commercial storefronts.",
    icon: "/images/Clarkston-Glass-framed-shower.jpg",
    link: "/services/storefront-solutions",
  },
];

export default function Services() {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[var(--text)]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="mr-4"
              />
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                {service.title}
              </h2>
            </div>
            <p className="text-base text-[var(--text)]">
              {service.description}
            </p>
            <a
              href={service.link}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
