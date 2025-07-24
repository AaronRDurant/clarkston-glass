import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Clarkston Glass — Custom Glass Solutions",
  description: "High-quality glass services in Clarkston, MI.",
  metadataBase: new URL("https://www.clarkstonglass.net"),
  openGraph: {
    title: "Clarkston Glass — Custom Glass Solutions",
    description: "High-quality glass services in Clarkston, MI.",
    url: "https://www.clarkstonglass.net",
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
    title: "Clarkston Glass — Custom Glass Solutions",
    description: "High-quality glass services in Clarkston, MI.",
    images: ["/images/og/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1D4ED8" />
      </head>
      <body className="bg-white text-[#2c2c2c] antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Clarkston Glass",
              image: "https://www.clarkstonglass.net/images/og/og-default.jpg",
              "@id": "https://www.clarkstonglass.net",
              url: "https://www.clarkstonglass.net",
              telephone: "+1-248-625-5911",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6577 Dixie Hwy",
                addressLocality: "Clarkston",
                addressRegion: "MI",
                postalCode: "48346",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              sameAs: ["https://www.facebook.com/clarkstonglass"],
            }),
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
