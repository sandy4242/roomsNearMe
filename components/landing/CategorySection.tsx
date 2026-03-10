import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Explore Categories
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight text-gray-800">
            Curated <span className="text-red-600">Spaces </span>for Every Lifestyle
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl">
            From premium PGs to commercial spaces, discover
            properties tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-14">

          <CategoryCard
            title="PGs & Hostels"
            subtitle="Comfortable & Verified"
            image="/hostel-pg.jpg"
            href="/browse?type=pg"
          />

          <CategoryCard
            title="Rooms"
            subtitle="Modern Living Spaces"
            image="/rooms.svg"
            href="/browse?type=property"
          />

          <CategoryCard
            title="Commercial Spaces"
            subtitle="Prime Business Locations"
            image="/tolett.png"
            href="/browse?type=land"
          />

        </div>

      </div>
    </section>
  );
}