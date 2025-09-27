import { Calendar, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gala 2025</h3>
                <p className="text-sm text-gray-300">CDEPS Yeumbeul</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Rejoignez-nous pour une soirée exceptionnelle au CDEPS de Yeumbeul. 
              Un événement inoubliable vous attend avec des moments de partage et de convivialité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/reservation" className="text-gray-300 hover:text-white transition-colors">Réservation</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-3 text-green-400" />
                <span className="text-sm text-gray-300">24 Décembre 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-green-400" />
                <span className="text-sm text-gray-300">CDEPS Yeumbeul</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-green-400" />
                <span className="text-sm text-gray-300">+221 77 161 90 12 / +221 77 437 85 58</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-green-400" />
                <span className="text-sm text-gray-300">aeeomsectiondakar@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Gala CDEPS Yeumbeul. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;