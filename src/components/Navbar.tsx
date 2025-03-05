"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaceSmileIcon,
  MapPinIcon,
  PhoneIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false); // Prevent SSR mismatch

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "system";
      document.documentElement.setAttribute("data-theme", storedTheme);
      setTheme(storedTheme);
      setMounted(true);
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-center text-white text-xs md:text-sm fixed top-0 left-0 w-full z-50 h-12 md:h-14 px-6 bg-blue-900">
        <div className="w-[90%] max-w-5xl flex justify-between items-center">
          {/* Address & Phone on Left */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPinIcon className="h-4 w-4" />
              <span className="text-sm">
                6577 Dixie Hwy, Clarkston, MI 48346
              </span>
            </div>
          </div>

          {/* Centered "Serving Southeast Michigan" */}
          <div className="flex items-center space-x-1">
            <FaceSmileIcon className="h-4 w-4" />
            <span>Serving Southeast Michigan for 30+ years</span>
          </div>

          {/* Phone & CTA on Right */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm">248-625-5911</span>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-3 py-1 rounded font-semibold hover:bg-yellow-300 transition"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-12 left-0 w-full z-40 bg-[#222] shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="w-[90%] max-w-5xl mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/Clarkston-Glass-logo.png"
              alt="Clarkston Glass logo"
              width={100}
              height={57}
              loading="lazy"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li
                key={link.href}
                className="relative transition-all duration-200 ease-in-out"
              >
                <a
                  href={link.href}
                  className={`transition-all duration-200 ease-in-out transform hover:scale-110 hover:text-gray-300
                  after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300
                  ${
                    pathname === link.href
                      ? "text-gray-300 after:w-full"
                      : "text-white hover:text-gray-300 after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-500 transition-all duration-300"
          >
            <div
              className="relative w-6 h-6 flex items-center justify-center transition-transform duration-300"
              style={{
                transform: theme === "dark" ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              {mounted ? (
                theme === "dark" ? (
                  <SunIcon className="absolute h-6 w-6 text-yellow-400 opacity-100 transition-opacity duration-300" />
                ) : (
                  <MoonIcon className="absolute h-6 w-6 text-gray-900 dark:text-gray-300 opacity-100 transition-opacity duration-300" />
                )
              ) : (
                <span className="block w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              )}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
