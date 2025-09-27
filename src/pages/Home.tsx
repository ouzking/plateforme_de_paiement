//import React from 'react';
import { Calendar, MapPin, Users, Star, ArrowRight, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Événement Exclusif 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Dîner de Gala
              <span className="block text-green-600">Exceptionnel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Rejoignez-nous pour une soirée inoubliable au CDEPS de Yeumbeul. 
              Une expérience culinaire raffinée dans un cadre élégant.
            </p>
            
            {/* Event Details Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Date</h3>
                <p className="text-gray-600">24 Décembre 2025</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Lieu</h3>
                <p className="text-gray-600">CDEPS Yeumbeul</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Heure</h3>
                <p className="text-gray-600">19h00 - 23h30</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Réserver Maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Une Expérience Unique
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce qui rend notre dîner de gala si spécial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cuisine Raffinée</h3>
              <p className="text-gray-600">
                Menu gastronomique préparé par des chefs renommés avec des ingrédients de première qualité.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ambiance Élégante</h3>
              <p className="text-gray-600">
                Cadre sophistiqué avec décoration soignée et ambiance musicale pour une soirée mémorable.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Premium</h3>
              <p className="text-gray-600">
                Service attentionné et personnalisé pour garantir votre satisfaction tout au long de la soirée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Réservez Votre Place Dès Maintenant
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Places limitées - Ne manquez pas cette soirée d'exception
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center">
            Commencer la Réservation
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;