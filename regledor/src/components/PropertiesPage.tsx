import React from 'react';
import { Search, MapPin, Bed, Bath, Square, Heart, Filter, Grid, List, ArrowRight } from 'lucide-react';
import SearchBar from './SearchBar';

interface PropertiesPageProps {
  onNavigate: (page: string) => void;
}

export default function PropertiesPage({ onNavigate }: PropertiesPageProps) {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState('price-desc');

  const properties = [
    {
      id: 1,
      title: "Villa Moderne avec Piscine - Tokoin",
      price: "450 000 000",
      location: "Tokoin, Lomé",
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "Villa"
    },
    {
      id: 2,
      title: "Appartement de Luxe - Agoè",
      price: "120 000 000",
      location: "Agoè, Lomé",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "Appartement"
    },
    {
      id: 3,
      title: "Villa avec Jardin - Calavi",
      price: "320 000 000",
      location: "Calavi, Cotonou",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "Villa"
    },
    {
      id: 4,
      title: "Penthouse Vue Mer - Fidjrossè",
      price: "800 000 000",
      location: "Fidjrossè, Cotonou",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "Appartement"
    },
    {
      id: 5,
      title: "Villa Contemporaine - Cocody",
      price: "650 000 000",
      location: "Cocody, Abidjan",
      bedrooms: 6,
      bathrooms: 5,
      area: 400,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "Villa"
    },
    {
      id: 6,
      title: "Duplex Standing - Bè",
      price: "180 000 000",
      location: "Bè, Lomé",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "Appartement"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Biens d'Exception
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de propriétés de prestige au Togo et au Bénin
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">{properties.length} biens trouvés</span>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtres</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="price-desc">Prix décroissant</option>
                <option value="price-asc">Prix croissant</option>
                <option value="area-desc">Surface décroissante</option>
                <option value="recent">Plus récents</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => onNavigate('property-detail')}
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coup de Coeur
                      </div>
                    )}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-red-500 transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium text-gray-700">
                      {property.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">{property.title}</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          <span>{property.area}m²</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-yellow-600">
                        {parseInt(property.price).toLocaleString()} FCFA
                      </div>
                      <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => onNavigate('property-detail')}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      {property.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Coup de Coeur
                        </div>
                      )}
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{property.title}</h3>
                      
                      <div className="flex items-center space-x-6 mb-4 text-gray-600">
                        <div className="flex items-center">
                          <Bed className="w-5 h-5 mr-2" />
                          <span>{property.bedrooms} chambres</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-5 h-5 mr-2" />
                          <span>{property.bathrooms} salles de bain</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-5 h-5 mr-2" />
                          <span>{property.area}m²</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold text-yellow-600">
                          {parseInt(property.price).toLocaleString()} FCFA
                        </div>
                        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200">
                          Voir le détail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}