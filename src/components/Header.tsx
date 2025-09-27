import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Réservation', path: '/reservation' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Gala 2025</h1>
              <p className="text-xs text-green-600">CDEPS Yeumbeul</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Réserver Maintenant
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <Link
                to="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full text-center font-medium hover:from-green-700 hover:to-green-600 transition-all duration-200"
              >
                Réserver Maintenant
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Info Bar */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2 text-sm text-green-800">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">24 Décembre 2025 • CDEPS Yeumbeul</span>
            <Phone className="h-4 w-4 ml-6 mr-2" />
            <span>+221 77 437 85 58 / +221 77 161 90 12</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;