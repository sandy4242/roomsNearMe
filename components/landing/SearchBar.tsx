// components/landing/SearchBar.tsx
"use client";

import { useState } from "react";  // ← ADD THIS LINE
import { useRouter, usePathname } from "next/navigation";
import { MapPin, Building2 } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [location, setLocation] = useState("Majitar");     // Now works
  const [category, setCategory] = useState("All");         // Now works

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location !== "") params.set("location", location);
    if (category !== "All") params.set("category", category);

    // Landing page → /browse, Browse page → update current URL
    const targetPath = pathname === "/" ? "/browse" : pathname;
    const queryString = params.toString();
    const url = queryString ? `${targetPath}?${queryString}` : targetPath;

    router.push(url);
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
          <option value="">All Locations</option>
          <option value="Majitar">Majitar</option>
          <option value="Rangpo">Rangpo</option>
          <option value="Singtam">Singtam</option>
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
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="px-10 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-black text-black hover:bg-white/20 transition-all"
      >
        Search
      </button>
    </div>
  );
}
