import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="pt-40 px-6 md:px-12 lg:px-24">
        {/* Subtitle */}
        <h2
          className="text-center text-[65px] md:text-[53px] sm:text-[44px] font-extrabold leading-tight mb-6"
          style={{ color: "var(--text)" }}
        >
          Expertly crafted glass, built to last
        </h2>

        {/* Paragraph */}
        <p
          className="text-center text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          For over 30 years, Clarkston Glass has provided expert glass
          solutions, from custom mirrors to storefronts, with precision and
          lasting results. Trusted by homes and businesses across Southeast
          Michigan.
        </p>

        {/* Image */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <Image
            src="/images/Levi-Kitchen-2025-Detroit-Supercross.jpg"
            alt="Clarkston Glass project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
