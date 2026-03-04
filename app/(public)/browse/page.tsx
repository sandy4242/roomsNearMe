'use client';

import { useState } from 'react';
import BrowsePropertyCard from '@/components/landing/BrowsePropertyCard';
import Searchbar from '@/components/landing/SearchBar';
import Footer from '@/components/landing/Footer';

const properties = [
  {
    id: 1,
    image: '/public/ronaldo.jpg',
    title: 'Cozy 2BHK in Siliguri',
    type: 'Residential',
    price: '₹25,000/mo',
    location: 'Sevoke Road, Siliguri',
    beds: 2,
    baths: 1,
  },
  {
    id: 2,
    image: '/public/ronaldo.jpg',
    title: 'Modern Office Space',
    type: 'Commercial',
    price: '₹45,000/mo',
    location: 'Matigara, Siliguri',
    beds: null,
    baths: 2,
  },
  {
    id: 3,
    image: '/public/ronaldo.jpg',
    title: 'Luxury Studio Apt',
    type: 'Residential',
    price: '₹18,000/mo',
    location: 'Bagdogra, Siliguri',
    beds: 1,
    baths: 1,
  },
  {
    id: 4,
    image: '/public/ronaldo.jpg',
    title: 'Retail Shop Front',
    type: 'Commercial',
    price: '₹60,000/mo',
    location: 'Seorajpur, Siliguri',
    beds: null,
    baths: null,
  },
];

export default function BrowsePage() {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter(prop => 
    (filterType === 'All' || prop.type === filterType) &&
    prop.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section - ONLY Searchbar */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <Searchbar 
            onSearch={(query) => setSearchQuery(query)}
            onFilterChange={(type) => setFilterType(type)}
            searchQuery={searchQuery}
            filterType={filterType}
          />
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-2 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map((property) => (
            <BrowsePropertyCard
              key={property.id}
              id={property.id.toString()}
              title={property.title}
              price={property.price}
              location={property.location}
              image={property.image}
              type={property.type}
              beds={property.beds}
              baths={property.baths}
            />
          ))}
        </div>
        {filteredProperties.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <p className="text-2xl text-slate-400 mb-4 font-display">No properties found.</p>
            <p className="text-slate-500 font-body">Try adjusting your search or filters.</p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
