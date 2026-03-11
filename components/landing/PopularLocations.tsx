import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    name: "Gangtok",
    image: "/hari.jpg",
  },
  {
    name: "Tadong",
    image: "/jyoti.jpg",
  },
  {
    name: "Rangpo",
    image: "/neeraj.jpg",
  },
  {
    name: "Namchi",
    image: "/unma.jpg",
  },
];

export default function PopularLocations() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-20">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Explore Locations
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight text-gray-700">
            Discover Sikkim’s Finest <span className="text-red-600">Areas</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl">
            Explore curated neighborhoods across Sikkim and find properties
            that match your lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={`/browse?location=${location.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden">

                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white text-xl font-medium">
                  {location.name}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}