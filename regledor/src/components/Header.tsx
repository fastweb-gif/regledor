import React from 'react';
import { Home, Search, Calculator, User, Menu, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'properties', label: 'Nos Biens', icon: Search },
    { id: 'estimate', label: 'Estimation', icon: Calculator },
    { id: 'services', label: 'Services', icon: User },
    { id: 'blog', label: 'Guides', icon: Menu },
    { id: 'client-space', label: 'Espace Client', icon: User }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Home className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">LuxuryEstate</h1>
              <p className="text-xs text-slate-600">Immobilier de Prestige</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === id
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'text-slate-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+22996123456" className="flex items-center space-x-2 text-slate-700 hover:text-yellow-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+229 96 12 34 56</span>
            </a>
            <a href="mailto:contact@luxuryestate.com" className="flex items-center space-x-2 text-slate-700 hover:text-yellow-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    onNavigate(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentPage === id
                      ? 'bg-yellow-500 text-white'
                      : 'text-slate-700 hover:bg-yellow-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}