import Image from "next/image";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center">

      {/* Background */}
      <Image
        src="/landingdesign.png"
        alt="Luxury Property"
        fill
        priority
        className="object-cover blur-sm "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

        <div className="max-w-4xl">

          <h1 className="text-white text-4xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
          <span className="text-red-600">Find Your Perfect</span> Space.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl">
            Discover curated rooms, PGs, and commercial spaces in Sikkim - all
            verified and directly from owners.
          </p>

          <SearchBar />

        </div>

      </div>

    </section>
  );
}