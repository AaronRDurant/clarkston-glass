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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [theme, setTheme] = useState("system");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showDarkModeToggle = true;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "system";
      document.documentElement.setAttribute("data-theme", storedTheme);
      setTheme(storedTheme);
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-center text-white text-xs md:text-sm fixed top-0 left-0 w-full z-50 h-12 md:h-14 px-6 bg-blue-900">
        <div className="w-[90%] max-w-5xl flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPinIcon className="h-4 w-4" />
              <span className="text-sm">
                6577 Dixie Hwy, Clarkston, MI 48346
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <FaceSmileIcon className="h-4 w-4" />
            <span>Serving Southeast Michigan for 30+ years</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm">248-625-5911</span>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-3 py-1 rounded font-semibold hover:bg-yellow-300 transition text-sm"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop + Tablet Nav */}
      <nav className="hidden md:flex fixed top-12 left-0 w-full z-40 bg-[#222] shadow-lg">
        <div className="w-[90%] max-w-5xl mx-auto flex justify-between items-center py-3 px-6">
          <Link
            href="/"
            className="flex items-center transition duration-200 hover:scale-105 hover:opacity-90"
          >
            <Image
              src="/Clarkston-Glass-logo.png"
              alt="Clarkston Glass logo"
              width={100}
              height={57}
              loading="lazy"
              className="object-contain"
            />
          </Link>

          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="relative group">
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm font-medium uppercase tracking-wide transition duration-200 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-100 hover:text-yellow-300"
                    }`}
                  >
                    {name}
                  </Link>
                  <div
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>

          {showDarkModeToggle && (
            <div
              onClick={toggleTheme}
              className="relative ml-4 w-14 h-7 bg-gray-200/60 dark:bg-gray-700/60 rounded-full cursor-pointer transition-all duration-300 shadow-inner"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-all duration-300 ease-in-out transform ${
                  theme === "light" ? "translate-x-7" : ""
                }`}
              >
                {mounted && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <SunIcon
                      className={`absolute w-5 h-5 text-yellow-500 transition-all duration-300 ${
                        theme === "light"
                          ? "rotate-0 opacity-100 scale-100"
                          : "-rotate-90 opacity-0 scale-50"
                      }`}
                    />
                    <MoonIcon
                      className={`absolute w-5 h-5 text-gray-900 dark:text-gray-300 transition-all duration-300 ${
                        theme === "dark"
                          ? "rotate-0 opacity-100 scale-100"
                          : "rotate-90 opacity-0 scale-50"
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-md h-14 px-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/Clarkston-Glass-logo.png"
            alt="Clarkston Glass logo"
            width={36}
            height={36}
            className="mr-2"
          />
          <span className="text-[var(--text)] font-bold text-sm">
            Clarkston Glass
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-[var(--text)] text-xs font-bold"
        >
          <span>MENU</span>
          {isOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full z-40 bg-black/60 backdrop-blur-lg transition-transform w-full max-w-xs shadow-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 pt-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/Clarkston-Glass-logo.png"
              alt="Clarkston Glass logo"
              width={36}
              height={36}
              className="mr-2"
            />
            <span className="text-white font-bold text-base">
              Clarkston Glass
            </span>
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <nav className="flex flex-col mt-8 space-y-5 px-6 text-lg font-semibold text-white">
          {navLinks.map(({ name, href }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              {name}
            </Link>
          ))}
        </nav>

        <div className="mt-10 px-6 space-y-6">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-400 text-gray-900 text-center px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Get a Free Estimate
          </Link>

          <div className="text-sm text-white space-y-4">
            <div className="flex items-start space-x-3">
              <PhoneIcon className="h-5 w-5 text-blue-400 opacity-90" />
              <a href="tel:+12486255911" className="hover:underline">
                248-625-5911
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPinIcon className="h-5 w-5 text-green-400 opacity-90" />
              <address className="not-italic">
                6577 Dixie Hwy
                <br />
                Clarkston, MI 48346
              </address>
            </div>
            <div className="flex items-start space-x-3">
              <FaceSmileIcon className="h-5 w-5 text-purple-400 opacity-90" />
              <span>
                Mon–Fri: 8 am – 5 pm
                <br />
                Sat: 8 am – 12 pm
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navs */}
      <div className="h-[3.5rem] md:h-[5.5rem]" />
    </>
  );
}
