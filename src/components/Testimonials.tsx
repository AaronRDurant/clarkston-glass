"use client";

import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    text: "Clarkston Glass handled our tricky shower enclosure like pros. It turned out better than expected — precise, clean, and professional.",
  },
  {
    text: "They replaced our shattered car window same-day, even gave me a ride. Incredible service and super friendly staff.",
  },
  {
    text: "I shattered a glass door panel and they replaced it with tempered glass at half the price I was quoted elsewhere. Fast and flawless.",
  },
  {
    text: "Took a stone chip to the windshield on I-75 — drove straight to Clarkston Glass and was back on the road 15 minutes later. Perfect repair.",
  },
  {
    text: "We've used them for two projects years apart — consistently great service, fair prices, and top-notch installation both times.",
  },
  {
    text: "There was a mishap with our shower door hardware and they replaced it with no arguing or extra cost. Friendly and professional throughout.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-light">
      <div className="section-wrapper py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center justify-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
              </div>

              <p className="text-base md:text-lg text-gray-800">
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
