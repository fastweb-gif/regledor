import React from 'react';
import { Search, MapPin, Home, Bed, Euro } from 'lucide-react';

export default function SearchBar() {
  const [filters, setFilters] = React.useState({
    location: '',
    type: '',
    priceMin: '',
    priceMax: '',
    bedrooms: ''
  });

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Location */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tokoin, Agoè, Calavi..."
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
            >
              <option value="">Tous types</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="terrain">Terrain</option>
              <option value="immeuble">Immeuble</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prix min</label>
          <div className="relative">
            <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="number"
              placeholder="10 000 000"
              value={filters.priceMin}
              onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prix max</label>
          <div className="relative">
            <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="number"
              placeholder="500 000 000"
              value={filters.priceMax}
              onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Chambres</label>
          <div className="relative">
            <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
            >
              <option value="">Toutes</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
          <Search className="w-5 h-5" />
          <span>Rechercher</span>
        </button>
      </div>
    </div>
  );
}