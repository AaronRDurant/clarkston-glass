"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonialsData = [
  {
    text: "We had a very challenging shower enclosure. I got quotes from 2 other glass shops, neither of them were comfortable handling the odd angles required for this project. Eric came out to measure and I instantly felt confident that his team would handle the project without any difficulty. I'm glad we decided to go with Clarkston Glass. Our shower came out better than I had expected, and the installers were very knowledgeable and professional. I'll recommend this business to anyone I know who needs glass work.",
    author: "- Satisfied Customer",
  },
  {
    text: "These guys are AWESOME!!!!! When my back window shattered, most of my friends referred me to Safelite. They were going to take 4 days to get me in. Clarkston Glass ordered my window and I got my car back the next morning. AND, I was going to have to walk to them because I didn't have a ride, so they sent someone to get me. They were AMAZING. The entire staff was great, too. Thank you, Clarkston Glass!",
    author: "- Happy Customer",
  },
  {
    text: "Best prices in 100 miles - totally worth the drive! Clarkston Glass is friendly, competent, speedy, and way cheaper than their competitors. They replaced the glass in a 1970s doorwall panel I had broken with tempered glass, and did it perfectly. The cost was in literally less than half what I was quoted elsewhere. I can't say enough good about them.",
    author: "- Happy Customer",
  },
  {
    text: "Driving south on 75 I caught a mammoth stone in my windshield causing a nasty looking chip. I called Clarkston Glass since they were the closest glass repair to my location to see if they could get me in to repair the damage. They said to come by and they would fit me in. I got there and within 15 minutes I was fixed and back on the road. Scotty did an amazing job with the pretty substantial stone chip damage and prevented any further damage or cracking. Very impressed and thankful for the entire staff there! 5 STARS!!",
    author: "- Grateful Customer",
  },
  {
    text: "We have used them twice on 2 different projects. Once for a shower door replacement and several years later for glass replacement in a door wall and large living room window. They were excellent both times. Price was reasonable and work was done timely by a skilled person. We would use them again.",
    author: "- Loyal Customer",
  },
  {
    text: "We had a shower door ordered and installed through them. There was a mishap with the finish on the hardware and they replaced it with no arguing and without demanding anything extra. After that there was a slight adjustment needed even though they had received final payment. Despite that they still came out and fixed it very promptly. A very friendly and professional group of people. We will be using them again.",
    author: "- Satisfied Customer",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  return (
    <section className="section-light py-32">
      <div className="section-wrapper">
        <h2 className="text-4xl font-bold mb-8 text-center heading-light">
          What Our Clients Are Saying
        </h2>
        <div className="relative">
          {/* Testimonial Card with fixed height */}
          <div className="bg-white border border-gray-300 p-8 md:p-10 rounded-lg shadow-xl mx-auto max-w-3xl h-80 overflow-y-auto">
            <p className="text-base md:text-lg text-gray-800 mb-6">
              “{testimonialsData[currentIndex].text}”
            </p>
            <p className="text-right text-sm md:text-base font-medium text-gray-700">
              {testimonialsData[currentIndex].author}
            </p>
          </div>
          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>

            <button
              onClick={nextTestimonial}
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow transition-colors"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
