import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react"; // npm i lucide-react

interface BrowsePropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  type?: string;
  beds?: number;
  baths?: number;
}

export default function BrowsePropertyCard({
  id,
  title,
  price,
  location,
  image,
  type,
  beds,
  baths,
}: BrowsePropertyCardProps) {
  const handleCallOwner = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('tel:+919876543210', '_blank'); // Replace with dynamic owner phone
  };

  return (
    <Link
      href={`/property/${id}`}
      className="group block bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 cursor-pointer h-full"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-400/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        {type && (
          <div className="absolute top-4 left-4 bg-teal-500/95 text-black px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg">
            {type}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-black mb-3 line-clamp-1 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-300 mb-4 font-body">{location}</p>

        {/* Price & Beds/Baths */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
            {price}
          </span>
          {beds && baths && (
            <span className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-full backdrop-blur-md font-body">
              {beds}B/{baths}B
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleCallOwner}
            className="h-14 px-15 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition shadow"
          >
            <Phone className="w-4 h-4" />
          </button>
          
          <Link
            href={`/property/${id}`}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-black text-sm font-semibold rounded-xl backdrop-blur-md border border-white/30 hover:border-white/50 transition-all font-body flex items-center justify-center whitespace-nowrap shadow-lg  hover:shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            View Details →
          </Link>
        </div>
      </div>
    </Link>
  );
}
