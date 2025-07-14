import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PropertiesPage from './components/PropertiesPage';
import PropertyDetail from './components/PropertyDetail';
import EstimatePage from './components/EstimatePage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ClientSpace from './components/ClientSpace';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'properties':
        return <PropertiesPage onNavigate={setCurrentPage} />;
      case 'property-detail':
        return <PropertyDetail onNavigate={setCurrentPage} />;
      case 'estimate':
        return <EstimatePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage onNavigate={setCurrentPage} />;
      case 'client-space':
        return <ClientSpace onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;