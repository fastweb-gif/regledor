import React from 'react';
import { Calculator, MapPin, Star, Play, ArrowRight, Bed, Bath, Square, Heart } from 'lucide-react';
import SearchBar from './SearchBar';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProperties = [
    {
      id: 1,
      title: "Villa Moderne - Tokoin",
      price: "450 000 000",
      location: "Tokoin, Lomé",
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
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
      featured: false
    },
    {
      id: 3,
      title: "Villa avec Piscine - Calavi",
      price: "320 000 000",
      location: "Calavi, Cotonou",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Mme Adjoa Koffi",
      role: "Propriétaire",
      content: "Service exceptionnel ! Ils ont vendu ma villa en moins de 2 mois au prix que je souhaitais.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "M. Jean-Baptiste Agbo",
      role: "Acheteur",
      content: "Accompagnement professionnel du début à la fin. Je recommande vivement !",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Mme Fatou Diallo",
      role: "Investisseur",
      content: "Expertise remarquable et conseils avisés pour mes investissements immobiliers.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Votre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {" "}Immobilier{" "}
              </span>
              de Prestige
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Découvrez les plus belles propriétés du Togo et du Bénin. 
              Expertise, confiance et service d'exception depuis 15 ans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => onNavigate('estimate')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Calculator className="w-6 h-6" />
                <span>Estimation Gratuite</span>
              </button>
              
              <button
                onClick={() => onNavigate('properties')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center space-x-2"
              >
                <span>Découvrir nos Biens</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">500+</div>
                <div className="text-gray-300 text-sm md:text-base">Biens Vendus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">15</div>
                <div className="text-gray-300 text-sm md:text-base">Années d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">98%</div>
                <div className="text-gray-300 text-sm md:text-base">Clients Satisfaits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Play Button */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/30">
            <Play className="w-8 h-8 ml-1" />
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trouvez Votre Bien Idéal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utilisez notre recherche avancée pour découvrir les propriétés qui correspondent parfaitement à vos critères.
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Biens d'Exception
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de propriétés de prestige, soigneusement choisies pour leur qualité exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => onNavigate('property-detail')}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coup de Coeur
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-red-500 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{property.title}</h3>
                  
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('properties')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Voir Tous nos Biens
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explorez par Zone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos biens disponibles sur une carte interactive pour mieux visualiser les emplacements.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Carte Interactive</p>
              <p className="text-gray-500 text-sm mt-2">Integration avec Google Maps ou Mapbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que Disent nos Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plus de 500 familles nous ont fait confiance pour leurs projets immobiliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Vendre ou Acheter ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans toutes vos démarches immobilières. 
            Estimation gratuite et sans engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('estimate')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Estimation Gratuite
            </button>
            
            <button
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              Nos Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}