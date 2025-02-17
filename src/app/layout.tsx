import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Clarkston Glass — Custom Glass Solutions",
  description: "High-quality glass services in Clarkston, MI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before hydration to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem("theme") || "system";
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.dataset.theme = theme === "dark" || (theme === "system" && prefersDark) ? "dark" : "light";
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col transition-all duration-300"
        style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
