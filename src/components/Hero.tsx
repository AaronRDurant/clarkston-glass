"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [status, setStatus] = useState<string>("");

  // Get the current time and check if the business is open
  useEffect(() => {
    const today = new Date();

    const hours = today.getHours();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Define the business hours for each day of the week
    const businessHours = {
      1: { open: 8, close: 17 }, // Monday
      2: { open: 8, close: 17 }, // Tuesday
      3: { open: 8, close: 17 }, // Wednesday
      4: { open: 8, close: 17 }, // Thursday
      5: { open: 8, close: 17 }, // Friday
      6: { open: 8, close: 12 }, // Saturday (short hours)
      0: { open: 0, close: 0 }, // Sunday (closed)
    };

    const currentDayHours = businessHours[day as keyof typeof businessHours];

    // Convert 24-hour time to 12-hour format (e.g., 13 => 1 pm)
    const formatTime = (hour: number) => {
      const suffix = hour >= 12 ? "pm" : "am";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
      return `${formattedHour} ${suffix}`;
    };

    // Logic for the next business day (in case the store is closed for the day)
    let nextOpenDay = (day + 1) % 7;
    if (day === 0 || day === 6) {
      nextOpenDay = 1; // If it's Sunday (0) or Saturday (6), the next open day is Monday (1)
    }

    const nextOpenTime =
      businessHours[nextOpenDay as keyof typeof businessHours].open;

    // If it's within business hours
    if (hours >= currentDayHours.open && hours < currentDayHours.close) {
      setStatus(`We're open until ${formatTime(currentDayHours.close)} today!`);
    } else {
      // If the store is closed, check if it's before or after midnight and return appropriate message
      if (hours < currentDayHours.open) {
        // If it's before business hours but still today (e.g., before 8 am)
        setStatus(
          `We're closed. We'll be back today at ${formatTime(nextOpenTime)}.`
        );
      } else {
        // If after hours or after midnight, show the next open day
        setStatus(
          `We're closed. We'll be back ${
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ][nextOpenDay]
          } at ${formatTime(nextOpenTime)}.`
        );
      }
    }
  }, []);

  return (
    <div className="pt-40 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      {/* Hero Section - Flex Layout (Left and Right Split) */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-8">
        {/* Left side: Subtitle and Paragraph */}
        <div className="mb-12 md:mb-0 md:w-3/4">
          <h2 className="text-left text-[70px] md:text-[60px] sm:text-[50px] font-extrabold leading-tight mb-6 text-gray-900">
            Where Craft Meets Clarity
          </h2>
          <p className="text-left text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed text-gray-800">
            For over 30 years, Clarkston Glass has provided expert glass
            solutions, from custom mirrors to storefronts, with precision and
            lasting results. Trusted by homes and businesses across Southeast
            Michigan.
          </p>

          {/* Dynamic Status */}
          <div className="flex items-center text-lg font-semibold text-gray-800">
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
            src="/images/Clarkston-Glass-framed-shower.jpg"
            alt="Clarkston Glass framed shower project"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Divider to break Hero Section from the next section */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-500 my-8 to-transparent"></div>
    </div>
  );
};

export default Hero;
