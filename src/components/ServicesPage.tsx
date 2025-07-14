import React from 'react';
import { Home, TrendingUp, Users, Shield, Award, CheckCircle, Play, Star, Phone, Mail } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Home,
      title: "Vente de Propriétés",
      description: "Nous vous accompagnons dans la vente de votre bien avec une stratégie marketing personnalisée.",
      features: ["Estimation gratuite", "Photos professionnelles", "Visite virtuelle 3D", "Marketing digital"]
    },
    {
      icon: TrendingUp,
      title: "Investissement Immobilier",
      description: "Conseils d'experts pour optimiser vos investissements immobiliers et maximiser votre rentabilité.",
      features: ["Analyse de marché", "Calcul de rentabilité", "Gestion locative", "Défiscalisation"]
    },
    {
      icon: Users,
      title: "Accompagnement Acheteurs",
      description: "De la recherche à la signature, nous vous guidons dans toutes vos démarches d'acquisition.",
      features: ["Recherche personnalisée", "Négociation prix", "Aide au financement", "Suivi juridique"]
    },
    {
      icon: Shield,
      title: "Gestion Patrimoniale",
      description: "Gestion complète de votre patrimoine immobilier avec un service de conciergerie premium.",
      features: ["Gestion locative", "Maintenance", "Optimisation fiscale", "Reporting mensuel"]
    }
  ];

  const testimonials = [
    {
      name: "Mme Adjoa Koffi",
      role: "Propriétaire d'une villa à Tokoin",
      content: "Un service exceptionnel du début à la fin ! Ils ont vendu ma villa en seulement 6 semaines au prix que je souhaitais. L'équipe est très professionnelle et toujours disponible.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      videoUrl: "#"
    },
    {
      name: "M. Jean-Baptiste Agbo",
      role: "Acheteur d'un appartement à Agoè",
      content: "Grâce à leur expertise, j'ai trouvé l'appartement parfait pour ma famille. Ils m'ont accompagné dans toutes les démarches administratives et financières.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      videoUrl: "#"
    },
    {
      name: "Mme Fatou Diallo",
      role: "Investisseur immobilier",
      content: "Leurs conseils en investissement immobilier m'ont permis de constituer un patrimoine solide. Une équipe de confiance avec une vraie expertise du marché local.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      videoUrl: "#"
    }
  ];

  const whyChooseUs = [
    {
      title: "15 ans d'expérience",
      description: "Une expertise reconnue sur le marché immobilier togolais et béninois",
      stat: "15+"
    },
    {
      title: "500+ biens vendus",
      description: "Un réseau étendu et une connaissance approfondie du marché",
      stat: "500+"
    },
    {
      title: "98% de satisfaction",
      description: "Nos clients nous recommandent pour notre professionnalisme",
      stat: "98%"
    },
    {
      title: "Délai moyen de vente",
      description: "Grâce à notre stratégie marketing efficace",
      stat: "45 jours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services d'Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Découvrez notre gamme complète de services immobiliers conçus pour répondre à tous vos besoins patrimioniaux
          </p>
          <button
            onClick={() => onNavigate('estimate')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Estimation Gratuite
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une Expertise Complète à Votre Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la vente à l'investissement, nous vous accompagnons dans tous vos projets immobiliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Nous Faire Confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 bg-black/30 flex items-center justify-center text-white hover:bg-black/40 transition-all">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  
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

      {/* Awards and Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reconnaissances et Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre excellence reconnue par nos pairs et institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-32">
                <Award className="w-16 h-16 text-yellow-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez nos experts dès aujourd'hui pour une consultation gratuite et personnalisée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('estimate')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Estimation Gratuite
            </button>
            
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+229 96 12 34 56</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}