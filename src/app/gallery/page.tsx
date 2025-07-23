"use client";

import Image from "next/image";

const galleryImages = [
  "/images/gallery/Clarkston-Glass-custom-Euro-shower.jpg",
  "/images/gallery/Clarkston-Glass-custom-shower-glass.jpg",
  "/images/gallery/Clarkston-Glass-gym-mirror.jpg",
  "/images/gallery/Clarkston-Glass-stair-glass.jpg",
  "/images/gallery/Clarkston-Glass-shower-walls.jpg",
  "/images/gallery/Clarkston-Glass-commercial-storefront-mirror.jpg",
];

export default function GalleryPage() {
  return (
    <div className="bg-[#f9f9f9] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3">
            Craftsmanship in Every Pane
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Work Speaks for Itself
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            Explore our collection of completed glass projects — from custom
            residential installs to full-scale commercial storefronts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Clarkston Glass project ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
