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
    <div className="section-light">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-0 justify-between items-center">
          {/* Left side: Subtitle and Paragraph */}
          <div className="hero-container">
            <h2 className="text-3xl md:text-[42px] lg:text-5xl font-bold heading-light hero-heading">
              Pairing craft with clarity.
            </h2>
            <p className="text-base md:text-md lg:text-xl subheading-light hero-subheading max-w-md sm:max-w-lg md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              <span>
                For over 30 years, Clarkston Glass has provided expert glass
                solutions, from custom mirrors to storefronts, with precision
                and lasting results.
              </span>
              <span className="hidden md:inline">
                &nbsp;Trusted by homes and businesses across Southeast Michigan.
              </span>
            </p>

            {/* Dynamic Status */}
            <div className="hero-status">
              {status.includes("We're open") ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              ) : (
                <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
              )}
              {status}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="hero-image-wrapper">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Clarkston Glass framed shower project"
              width={500}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
