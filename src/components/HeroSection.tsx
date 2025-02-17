"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const [status, setStatus] = useState<string>("");

  // Get current time and check if it's open
  useEffect(() => {
    const today = new Date();
    const hours = today.getHours();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Define working hours for the business (example: Mon-Fri 8 AM - 5 PM)
    const workingHours = {
      1: { open: 8, close: 17 }, // Monday
      2: { open: 8, close: 17 }, // Tuesday
      3: { open: 8, close: 17 }, // Wednesday
      4: { open: 8, close: 17 }, // Thursday
      5: { open: 8, close: 17 }, // Friday
      6: { open: 10, close: 14 }, // Saturday (short hours)
      0: { open: 0, close: 0 }, // Sunday (closed)
    };

    const currentDayHours = workingHours[day as keyof typeof workingHours];
    if (hours >= currentDayHours.open && hours < currentDayHours.close) {
      setStatus(`We're open until ${currentDayHours.close} pm.`);
    } else {
      const nextOpenDay = (day + 1) % 7;
      const nextOpenTime =
        workingHours[nextOpenDay as keyof typeof workingHours].open;
      setStatus(
        `We're closed. We'll be back at ${nextOpenTime} am on ${
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][nextOpenDay]
        }.`
      );
    }
  }, []);

  return (
    <div className="pt-40 px-6 md:px-12 lg:px-24 mb-16">
      {/* Hero Section - Flex Layout (Left and Right Split) */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Subtitle and Paragraph */}
        <div className="mb-12 md:mb-0 md:w-3/4">
          <h2 className="text-left text-[70px] md:text-[60px] sm:text-[50px] font-extrabold leading-tight mb-6 text-[var(--text)] transition-all duration-300">
            Where Craft Meets Clarity
          </h2>
          <p className="text-left text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-[var(--text)] transition-all duration-300">
            For over 30 years, Clarkston Glass has provided expert glass
            solutions, from custom mirrors to storefronts, with precision and
            lasting results. Trusted by homes and businesses across Southeast
            Michigan.
          </p>

          {/* Dynamic Status */}
          <div className="flex items-center text-lg font-semibold transition-all duration-300 text-[var(--text)]">
            {status.includes("We're open") ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
            )}
            {status}
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 w-full mb-12 md:mb-0 flex justify-center">
          <Image
            src="/images/Malcolm-Stewart-2025-Detroit-SX.jpg"
            alt="Clarkston Glass project"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
