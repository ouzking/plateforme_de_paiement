import { Calendar, MapPin, Clock, Users, Star, Award, Music, Utensils, Camera, Gift } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Utensils className="h-8 w-8 text-green-600" />,
      title: "Gastronomie d'Exception",
      description: "Menu conçu par des chefs renommés avec des mets raffinés et saveurs authentiques"
    },
    {
      icon: <Music className="h-8 w-8 text-green-600" />,
      title: "Animations Premium",
      description: "Spectacles live, DJ internationaux et performances artistiques de haut niveau"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Service d'Excellence",
      description: "Personnel formé aux standards internationaux pour une expérience inoubliable"
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Souvenirs Immortalisés",
      description: "Photographe professionnel et photobooth pour capturer vos moments précieux"
    }
  ];

  const timeline = [
    { time: "18h30", event: "Ouverture des portes et accueil" },
    { time: "19h00", event: "Cocktail de bienvenue" },
    { time: "20h00", event: "Cérémonie d'ouverture" },
    { time: "20h30", event: "Dîner gastronomique" },
    { time: "22h00", event: "Spectacle et animations" },
    { time: "23h00", event: "Ouverture de la piste de danse" },
    { time: "02h00", event: "Clôture de l'événement" }
  ];

  const gallery = [
    {
      category: "Lieu",
      description: "CDEPS Yeumbeul - Un cadre moderne et élégant",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
    },
    {
      category: "Gastronomie", 
      description: "Cuisine haut de gamme préparée par nos chefs",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
    },
    {
      category: "Ambiance",
      description: "Décoration raffinée aux couleurs vert et blanc",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-500 py-20 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À Propos du Gala 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Une soirée exceptionnelle qui allie élégance, gastronomie et divertissement
              dans le cadre prestigieux du CDEPS de Yeumbeul
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <Calendar className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Date Exclusive</h3>
                <p>24 Décembre 2025</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Lieu Prestigieux</h3>
                <p>CDEPS Yeumbeul</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Capacité Limitée</h3>
                <p>Places Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce Qui Rend Notre Gala Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque détail a été pensé pour vous offrir une expérience inoubliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-green-100">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programme de la Soirée
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez le déroulement détaillé de cette soirée exceptionnelle
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-green-300 transform md:-translate-x-px"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-lg font-bold text-green-600">{item.time}</span>
                      </div>
                      <p className="text-gray-800 font-medium">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aperçu de l'Expérience
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez l'ambiance qui vous attend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Choisir Notre Gala ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-green-100" />
                <h3 className="text-lg font-semibold mb-2">Qualité Premium</h3>
                <p className="text-green-100">Standards d'excellence</p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-100" />
                <h3 className="text-lg font-semibold mb-2">Service Personnalisé</h3>
                <p className="text-green-100">Attention à chaque détail</p>
              </div>
              
              <div className="text-center">
                <Gift className="h-12 w-12 mx-auto mb-4 text-green-100" />
                <h3 className="text-lg font-semibold mb-2">Expérience Unique</h3>
                <p className="text-green-100">Souvenirs inoubliables</p>
              </div>
              
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-green-100" />
                <h3 className="text-lg font-semibold mb-2">Excellence Garantie</h3>
                <p className="text-green-100">Satisfaction assurée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Réservez Votre Place Maintenant
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ne manquez pas cette opportunité unique. Les places sont limitées et la demande est forte !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Réserver Maintenant
            </a>
            <a
              href="/contact"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Plus d'Informations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;