import PropertyCard from "@/components/property/PropertyCard";
import Link from "next/link";

const featured = [
  {
    id: "1",
    title: "Modern PG near SMIT",
    price: "6,500 / month",
    location: "Tadong, Gangtok",
    image: "/frames.jpg",
  },
  {
    id: "2",
    title: "2BHK Apartment with Mountain View",
    price: "18,000 / month",
    location: "Gangtok",
    image: "/yayaq.jpg",
  },
  {
    id: "3",
    title: "Residential Land Plot",
    price: "25 Lakhs",
    location: "Namchi",
    image: "/manuel.jpg",
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">

          <div>
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Featured Properties
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight text-gray-700">
              Exceptional Spaces in Sikkim
            </h2>
          </div>

          <Link
            href="/browse"
            className="mt-6 md:mt-0 text-black border-b border-black pb-1 hover:opacity-70 transition"
          >
            View All Properties →
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {featured.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

      </div>
    </section>
  );
}