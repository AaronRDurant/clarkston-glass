"use client";

import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="mt-40 mb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Gallery
        </h1>
        <p className="text-center text-lg mb-12 text-gray-800">
          Explore our collection of completed projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 1"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 2"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 3"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 4"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 5"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="rounded-lg shadow hover:shadow-lg transition duration-300">
            <Image
              src="/images/Clarkston-Glass-framed-shower.jpg"
              alt="Gallery image 6"
              width={750}
              height={750}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
