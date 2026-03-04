"use client";

import { useState } from "react";
import { MapPin, Building2 } from "lucide-react";

export default function SearchBar() {
  const [location, setLocation] = useState("Majitar");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    console.log("Searching:", { location, category });

    // Later you can route:
    // router.push(`/browse?location=${location}&category=${category}`)
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">

      {/* Location */}
      <div className="flex items-center h-14 px-6 bg-white rounded-xl shadow border w-full max-w-xs">
        <MapPin className="w-5 h-5 text-gray-500" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="ml-3 w-full outline-none bg-transparent text-gray-700 text-sm cursor-pointer"
        >
          <option value="Majitar">Majitar</option>
          {/* <option value="Rangpo">Rangpo</option> */}
          {/* <option value="Singtam">Singtam</option> */}
        </select>
      </div>

      {/* Category */}
      <div className="flex items-center h-14 px-6 bg-white rounded-xl shadow border w-full max-w-xs">
        <Building2 className="w-5 h-5 text-gray-500" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-3 w-full outline-none bg-transparent text-gray-700 text-sm cursor-pointer"
        >
          <option value="All">All</option>
          <option value="PG">PG</option>
          <option value="Hostel">Food PG</option>
          <option value="Rooms">Rooms for Rent</option>
          <option value="Commercial">Commercial Space</option>
          {/* <option value="Flat">Flat</option>
          <option value="Plot">Plots</option> */}
        </select>
      </div>

      {/* Search Button */}
      <button
  onClick={handleSearch}
  className="px-10 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-black text-black hover:bg-white/20 transition-all"
            >
              Search
</button>

    </div>
  );
}