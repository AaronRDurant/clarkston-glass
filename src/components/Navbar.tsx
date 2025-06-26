"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaceSmileIcon,
  MapPinIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

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
            aria-label="Go to homepage"
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
        </div>
      </nav>

      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg shadow-md h-16 px-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
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
          <span className="text-gray-900 font-bold text-sm">
            Clarkston Glass
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex items-center space-x-2 text-gray-900 text-xs font-bold"
        >
          <span>MENU</span>
          {isOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Backdrop overlay to close mobile menu on outside tap */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Out Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full z-40 bg-black/60 backdrop-blur-lg transition-transform w-full max-w-xs shadow-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 space-y-5 px-6 text-lg font-semibold text-white">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              aria-label={`Go to ${name}`}
            >
              {name}
            </Link>
          ))}
        </div>

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
      <div className="h-[4rem] md:h-[5.5rem]" />
    </>
  );
}
