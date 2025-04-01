import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Glass installation project" },
  { src: "/images/gallery2.jpg", alt: "Custom mirror design" },
  { src: "/images/gallery3.jpg", alt: "Modern storefront glass" },
  { src: "/images/gallery4.jpg", alt: "Elegant shower enclosures" },
];

export default function Gallery() {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[var(--text)]">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
