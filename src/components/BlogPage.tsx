import React from 'react';
import { MapPin, Calendar, User, ArrowRight, TrendingUp, Home, Calculator, Search } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const blogCategories = [
    { id: 'all', label: 'Tous les guides', count: 24 },
    { id: 'quartiers', label: 'Guides par quartier', count: 8 },
    { id: 'conseils', label: 'Conseils achat', count: 6 },
    { id: 'investissement', label: 'Investissement', count: 5 },
    { id: 'tendances', label: 'Tendances marché', count: 5 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Tokoin : Le quartier résidentiel de prestige de Lomé",
      excerpt: "Découvrez pourquoi Tokoin est devenu le quartier le plus prisé par les familles aisées et les expatriés à Lomé.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "quartiers",
      date: "15 Janvier 2024",
      author: "Marie Adjovi",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Investir dans l'immobilier au Togo : Guide complet 2024",
      excerpt: "Tout ce que vous devez savoir pour réussir votre investissement immobilier au Togo en 2024.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "investissement",
      date: "12 Janvier 2024",
      author: "Jean-Baptiste Agbo",
      readTime: "8 min",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Agoè : Un quartier en pleine expansion",
      excerpt: "Analyse détaillée des opportunités d'investissement dans le quartier d'Agoè, en forte croissance.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "quartiers",
      date: "10 Janvier 2024",
      author: "Fatou Diallo",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Calavi : Le nouveau pôle attractif de Cotonou",
      excerpt: "Pourquoi Calavi attire de plus en plus d'acheteurs et d'investisseurs immobiliers.",
      image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "quartiers",
      date: "8 Janvier 2024",
      author: "Marie Adjovi",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "10 erreurs à éviter lors de l'achat d'un bien immobilier",
      excerpt: "Les pièges courants et comment les éviter pour réussir votre acquisition immobilière.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "conseils",
      date: "5 Janvier 2024",
      author: "Jean-Baptiste Agbo",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Tendances du marché immobilier 2024",
      excerpt: "Analyse des tendances et prévisions pour le marché immobilier togolais et béninois.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "tendances",
      date: "3 Janvier 2024",
      author: "Fatou Diallo",
      readTime: "9 min"
    },
    {
      id: 7,
      title: "Comment négocier le prix d'un bien immobilier",
      excerpt: "Stratégies et conseils d'experts pour réussir vos négociations immobilières.",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "conseils",
      date: "1 Janvier 2024",
      author: "Marie Adjovi",
      readTime: "6 min"
    },
    {
      id: 8,
      title: "Fidjrossè : Le quartier d'affaires en plein essor",
      excerpt: "Découvrez les opportunités d'investissement dans ce quartier stratégique de Cotonou.",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "quartiers",
      date: "28 Décembre 2023",
      author: "Jean-Baptiste Agbo",
      readTime: "5 min"
    }
  ];

  const marketStats = [
    { title: "Prix moyen m²", value: "850 000 FCFA", trend: "+5.2%", icon: TrendingUp },
    { title: "Temps de vente", value: "45 jours", trend: "-8%", icon: Calendar },
    { title: "Nouvelles constructions", value: "1,250", trend: "+12%", icon: Home },
    { title: "Demandes d'estimation", value: "2,840", trend: "+18%", icon: Calculator }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Guides & Conseils Immobiliers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Découvrez nos guides exclusifs pour réussir vos projets immobiliers au Togo et au Bénin
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un guide..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marché Immobilier en Temps Réel</h2>
            <p className="text-gray-600">Les dernières données du marché immobilier</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-600" />
                  <span className={`text-sm font-semibold ${
                    stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles à la Une</h2>
            <p className="text-gray-600">Nos dernières analyses et conseils d'experts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    À la Une
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors font-semibold flex items-center">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories and Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Restez Informé du Marché
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez chaque semaine nos analyses exclusives et les meilleures opportunités immobilières
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              S'abonner
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Pas de spam, désinscription en un clic
          </p>
        </div>
      </section>
    </div>
  );
}