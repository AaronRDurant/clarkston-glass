export const metadata = {
  title: "Contact • Clarkston Glass",
  description:
    "Get in touch for custom glass quotes, consultations, or questions. Serving Clarkston, MI and surrounding areas.",
  openGraph: {
    title: "Contact • Clarkston Glass",
    description:
      "Get in touch for custom glass quotes, consultations, or questions. Serving Clarkston, MI and surrounding areas.",
    url: "https://www.clarkstonglass.net/contact",
    siteName: "Clarkston Glass",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Clarkston Glass — Custom Glass Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact • Clarkston Glass",
    description:
      "Get in touch for custom glass quotes, consultations, or questions. Serving Clarkston, MI and surrounding areas.",
    images: ["/images/og/og-default.jpg"],
  },
};

import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#f9f9f9] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3">
            Let&rsquo;s Talk Glass
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Reach Out for a Quote or Consultation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            Call us, visit our showroom, or send a message below. We&rsquo;re
            here to help with any residential or commercial glass needs.
          </p>
        </div>

        {/* Contact Form */}
        <Contact variant="light" hideTitle />
      </div>
    </div>
  );
}
