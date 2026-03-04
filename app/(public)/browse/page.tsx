"use client";
import BrowsePropertyCard from "@/components/landing/BrowsePropertyCard";
import Searchbar from "@/components/landing/SearchBar";
import Footer from "@/components/landing/Footer";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function BrowsePage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchProperties = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("properties")
        .select(
          ` id, title, property_type, price, price_type, address, city, bedrooms, bathrooms, property_images ( image_url ) `,
        )
        .eq("is_active", true)
        .eq("is_verified", true);
      if (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
        return;
      }
      const propertyTypeMap: any = {
        commercial: "Commercial",
        pg: "Residential",
        room: "Residential",
        flat: "Residential",
        house: "Residential",
        land: "Residential",
      };
      const formatted = (data || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        type: propertyTypeMap[p.property_type] || "Residential",
        price: `₹${p.price}/${p.price_type === "monthly" ? "mo" : "yr"}`,
        location: `${p.address}, ${p.city}`,
        beds: p.bedrooms,
        baths: p.bathrooms,
        images: p.property_images?.length
          ? p.property_images.map((img: any) => img.image_url)
          : ["/ronaldo.jpg"],
      }));
      setProperties(formatted);
      setLoading(false);
    };
    fetchProperties();
  }, []);
  const filteredProperties = properties.filter(
    (prop) =>
      (filterType === "All" || prop.type === filterType) &&
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {" "}
      {/* Page Header */}{" "}
      <section className="pt-36 pb-10 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-6 text-center">
          {" "}
          <h1 className="text-4xl font-display font-semibold text-gray-900 mb-3">
            {" "}
            Browse <span className="text-red-600">Properties</span>{" "}
          </h1>{" "}
          <p className="text-gray-500 text-lg">
            {" "}
            Discover verified listings across Siliguri{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Search Section */}{" "}
      <section className="pb-16 bg-white">
        {" "}
        <div className="max-w-5xl mx-auto px-6">
          {" "}
          <Searchbar
            onSearch={(query) => setSearchQuery(query)}
            onFilterChange={(type) => setFilterType(type)}
            searchQuery={searchQuery}
            filterType={filterType}
          />{" "}
        </div>{" "}
      </section>{" "}
      {/* Category Filters */}{" "}
      <section className="pb-6 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-6 flex gap-4 overflow-x-auto">
          {" "}
          {["All", "Residential", "Commercial"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-5 py-2 rounded-full border text-sm transition whitespace-nowrap ${filterType === type ? "bg-black text-white border-black" : "border-gray-300 text-gray-700 hover:border-black"}`}
            >
              {" "}
              {type}{" "}
            </button>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* Property Grid */}{" "}
      <section className="pb-24 bg-gray-50">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          {/* Property Count */}{" "}
          <div className="flex justify-between items-center mb-10">
            {" "}
            <p className="text-gray-600 text-sm">
              {" "}
              {filteredProperties.length} properties available{" "}
            </p>{" "}
          </div>{" "}
          {loading ? (
            <div className="text-center py-32">
              {" "}
              <p className="text-gray-400 text-lg">
                Loading properties...
              </p>{" "}
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {" "}
              {filteredProperties.map((property) => (
                <BrowsePropertyCard
                  key={property.id}
                  id={property.id.toString()}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  images={property.images}
                  type={property.type}
                  beds={property.beds}
                  baths={property.baths}
                />
              ))}{" "}
            </div>
          ) : (
            <div className="text-center py-32">
              {" "}
              <p className="text-2xl text-gray-400 mb-4 font-display">
                {" "}
                No properties found{" "}
              </p>{" "}
              <p className="text-gray-500">
                {" "}
                Try adjusting your search or filters.{" "}
              </p>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </section>{" "}
      <Footer />{" "}
    </>
  );
}
