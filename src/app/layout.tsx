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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#2c2c2c] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
