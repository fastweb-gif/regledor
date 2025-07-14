import React from 'react';
import { User, Heart, Calendar, MessageCircle, Settings, LogOut, Home, TrendingUp, Bell, FileText, Eye, Star } from 'lucide-react';

interface ClientSpaceProps {
  onNavigate: (page: string) => void;
}

export default function ClientSpace({ onNavigate }: ClientSpaceProps) {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  const userProfile = {
    name: "Adjoa Koffi",
    email: "adjoa.koffi@email.com",
    phone: "+229 96 12 34 56",
    memberSince: "Janvier 2023",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
  };

  const notifications = [
    {
      id: 1,
      type: "visit",
      title: "Visite programmée",
      message: "Votre visite de la Villa Tokoin est confirmée pour demain à 14h",
      time: "Il y a 2h",
      read: false
    },
    {
      id: 2,
      type: "offer",
      title: "Nouvelle offre",
      message: "Une offre de 420M FCFA a été reçue pour votre villa",
      time: "Il y a 5h",
      read: false
    },
    {
      id: 3,
      type: "message",
      title: "Message de votre agent",
      message: "Marie Adjovi vous a envoyé un message",
      time: "Hier",
      read: true
    }
  ];

  const favoriteProperties = [
    {
      id: 1,
      title: "Villa Moderne - Tokoin",
      price: "450 000 000",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "Disponible"
    },
    {
      id: 2,
      title: "Appartement Luxe - Agoè",
      price: "120 000 000",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300",
      status: "Vendu"
    }
  ];

  const visitHistory = [
    {
      id: 1,
      property: "Villa Moderne - Tokoin",
      date: "15 Jan 2024",
      time: "14:00",
      status: "Terminée",
      rating: 5
    },
    {
      id: 2,
      property: "Penthouse - Fidjrossè",
      date: "20 Jan 2024",
      time: "10:00",
      status: "Programmée",
      rating: null
    }
  ];

  const messages = [
    {
      id: 1,
      from: "Marie Adjovi",
      subject: "Nouvelle propriété correspondant à vos critères",
      preview: "Bonjour, j'ai trouvé une villa qui pourrait vous intéresser...",
      time: "Il y a 2h",
      read: false
    },
    {
      id: 2,
      from: "Jean-Baptiste Agbo",
      subject: "Confirmation de visite",
      preview: "Votre visite de demain est confirmée à 14h...",
      time: "Hier",
      read: true
    }
  ];

  const tabItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'favorites', label: 'Mes favoris', icon: Heart },
    { id: 'visits', label: 'Mes visites', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Mon profil', icon: User }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Bonjour {userProfile.name.split(' ')[0]} !</h2>
              <p className="text-yellow-100">Voici un résumé de votre activité récente</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <span className="text-2xl font-bold text-gray-900">12</span>
                </div>
                <h3 className="text-gray-600">Biens favoris</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900">5</span>
                </div>
                <h3 className="text-gray-600">Visites programmées</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h3 className="text-gray-600">Messages non lus</h3>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Notifications récentes</h3>
              <div className="space-y-4">
                {notifications.slice(0, 3).map((notification) => (
                  <div key={notification.id} className={`flex items-start space-x-4 p-4 rounded-lg ${
                    !notification.read ? 'bg-yellow-50' : 'bg-gray-50'
                  }`}>
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      !notification.read ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                      <p className="text-gray-600 text-sm">{notification.message}</p>
                      <span className="text-gray-400 text-xs">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Mes Biens Favoris</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-600">
                        {parseInt(property.price).toLocaleString()} FCFA
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        property.status === 'Disponible' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'visits':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Mes Visites</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Propriété
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Heure
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Statut
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Évaluation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {visitHistory.map((visit) => (
                      <tr key={visit.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{visit.property}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{visit.date}</div>
                          <div className="text-sm text-gray-500">{visit.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            visit.status === 'Terminée'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {visit.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {visit.rating ? (
                            <div className="flex">
                              {[...Array(visit.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <div className="bg-white rounded-2xl shadow-lg">
              <div className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <div key={message.id} className={`p-6 hover:bg-gray-50 cursor-pointer ${
                    !message.read ? 'bg-yellow-50' : ''
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold ${!message.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {message.from}
                          </h3>
                          {!message.read && <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
                        </div>
                        <h4 className="text-gray-900 font-medium mt-1">{message.subject}</h4>
                        <p className="text-gray-600 text-sm mt-1">{message.preview}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Mon Profil</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{userProfile.name}</h3>
                  <p className="text-gray-600">Membre depuis {userProfile.memberSince}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={userProfile.phone}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                  <input
                    type="password"
                    value="********"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200">
                  Sauvegarder les modifications
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* User Info */}
              <div className="text-center mb-8">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900">{userProfile.name}</h3>
                <p className="text-gray-600 text-sm">Membre Premium</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                
                <hr className="my-4" />
                
                <button
                  onClick={() => onNavigate('home')}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Déconnexion</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}