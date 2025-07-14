import React from 'react';
import { Home, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Accueil', page: 'home' },
    { label: 'Nos Biens', page: 'properties' },
    { label: 'Estimation Gratuite', page: 'estimate' },
    { label: 'Nos Services', page: 'services' },
    { label: 'Guides', page: 'blog' },
    { label: 'Espace Client', page: 'client-space' }
  ];

  const locations = [
    'Tokoin, Lomé',
    'Agoè, Lomé', 
    'Calavi, Cotonou',
    'Fidjrossè, Cotonou',
    'Cocody, Abidjan',
    'Bè, Lomé'
  ];

  const services = [
    'Vente de Propriétés',
    'Achat Immobilier',
    'Investissement',
    'Gestion Locative',
    'Estimation Gratuite',
    'Conseil Juridique'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Restez Informé du Marché</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Recevez chaque semaine nos analyses exclusives et les meilleures opportunités immobilières
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>S'abonner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Home className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">LuxuryEstate</h1>
                <p className="text-xs text-gray-400">Immobilier de Prestige</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets immobiliers au Togo et au Bénin. 
              15 ans d'expertise à votre service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">123 Boulevard du 13 Janvier, Lomé</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">+229 96 12 34 56</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">contact@luxuryestate.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Zones</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <span className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LuxuryEstate. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}