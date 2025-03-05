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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div className="w-full mb-12 pt-6">
      <div className="flex justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 pb-10 rounded-lg shadow-xl max-w-3xl w-full h-[320px] flex flex-col justify-between relative transition-shadow duration-300">
          {/* Testimonial Content */}
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
              &quot;{testimonialsData[currentIndex].text}&quot;
            </p>
          </div>
          <div className="text-right text-gray-600 dark:text-gray-400 font-semibold mb-4">
            {testimonialsData[currentIndex].author}
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between items-center">
            <button
              onClick={prevTestimonial}
              className="text-gray-500 dark:text-gray-300 p-2"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <div className="flex justify-center space-x-2">
              {testimonialsData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "bg-blue-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  } transition-colors`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="text-gray-500 dark:text-gray-300 p-2"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
