import React from 'react';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar, MessageCircle, Share2, Heart, Phone, Video, Camera } from 'lucide-react';

interface PropertyDetailProps {
  onNavigate: (page: string) => void;
}

export default function PropertyDetail({ onNavigate }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);

  const propertyImages = [
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ];

  const property = {
    title: "Villa Moderne avec Piscine - Tokoin",
    price: "450 000 000",
    location: "Tokoin, Lomé, Togo",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    land: 800,
    yearBuilt: 2020,
    description: "Magnifique villa contemporaine située dans le quartier prisé de Tokoin. Cette propriété d'exception offre des finitions haut de gamme, une architecture moderne et tous les équipements pour un confort optimal. Parfaite pour une famille souhaitant allier luxe et tranquillité.",
    features: [
      "Piscine privée avec terrasse",
      "Garage pour 3 voitures",
      "Cuisine équipée moderne",
      "Système de sécurité complet",
      "Climatisation dans toutes les pièces",
      "Jardin paysager",
      "Bureau indépendant",
      "Dressing dans chambre parentale"
    ],
    agent: {
      name: "Marie Adjovi",
      phone: "+229 96 12 34 56",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
              <div className="relative">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt="Property"
                  className="w-full h-96 object-cover"
                />
                
                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Virtual Tour and Photo Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-white transition-all flex items-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span>Visite 3D</span>
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-white transition-all flex items-center space-x-1">
                    <Camera className="w-4 h-4" />
                    <span>Toutes les Photos</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="grid grid-cols-5 gap-2">
                  {propertyImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        index === currentImageIndex ? 'ring-2 ring-yellow-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
              
              <div className="text-4xl font-bold text-yellow-600 mb-6">
                {parseInt(property.price).toLocaleString()} FCFA
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-gray-600">Chambres</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-gray-600">Salles de bain</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                  <div className="text-gray-600">m² habitable</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Square className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.land}</div>
                  <div className="text-gray-600">m² terrain</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Caractéristiques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Contact Agent Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contacter l'Agent</h3>
                
                <div className="flex items-center mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{property.agent.name}</div>
                    <div className="text-gray-600">Agent Immobilier</div>
                    <div className="text-yellow-600 font-medium">{property.agent.phone}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Planifier une Visite</span>
                  </button>
                  
                  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Appeler</span>
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informations</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Année de construction</span>
                    <span className="font-semibold">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-semibold">Villa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Statut</span>
                    <span className="font-semibold text-green-600">Disponible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Référence</span>
                    <span className="font-semibold">LUX-TOK-001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}