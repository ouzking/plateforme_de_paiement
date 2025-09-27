import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Téléphone",
      details: ["+221 77 161 90 12", "+221 77 437 85 58"],
      description: "Lundi - Vendredi: 8h00 - 19h00"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email",
      details: ["aeeomsectiondakar@gmail.com", "ousmanearfangkemobodian@gmail.com"],
      description: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Adresse",
      details: ["CDEPS Yeumbeul", "Dakar, Sénégal"],
      description: "Lieu de l'événement"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Horaires Événement",
      details: ["24 Décembre 2025", "19h00 - 02h00"],
      description: "Ouverture des portes 18h30"
    }
  ];

  const faqItems = [
    {
      question: "Comment puis-je réserver mes billets ?",
      answer: "Vous pouvez réserver directement en ligne via notre plateforme sécurisée. Choisissez vos billets, remplissez vos informations et procédez au paiement via Wave ou Orange Money."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les paiements via Wave et Orange Money pour votre sécurité et votre convenience."
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "Les annulations sont possibles jusqu'à 72h avant l'événement. Contactez-nous pour connaître les conditions de remboursement."
    },
    {
      question: "Y a-t-il un code vestimentaire ?",
      answer: "Oui, l'événement nécessite une tenue de soirée élégante (costume/robe de cocktail). Le thème de couleurs bleu de nuit et blanc est encouragé."
    },
    {
      question: "Le parking est-il disponible ?",
      answer: "Oui, un parking gratuit et sécurisé est disponible au CDEPS de Yeumbeul pour tous nos invités."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Envoyé !
            </h2>
            <p className="text-gray-600 mb-6">
              Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200"
            >
              Nouveau Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <a
                  href="tel:+221XXXXXXXXX"
                  className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler Maintenant
                </a>
                <a
                  href="/reservation"
                  className="flex items-center justify-center w-full bg-green-100 text-green-700 py-3 px-4 rounded-lg font-semibold hover:bg-green-200 transition-colors"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Réserver en Ligne
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-green-600" />
                Envoyez-nous un Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="reservation">Questions sur la réservation</option>
                      <option value="payment">Problème de paiement</option>
                      <option value="event">Informations sur l'événement</option>
                      <option value="special">Demandes spéciales</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquemment Posées
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-start">
                    <Users className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Localisation - CDEPS Yeumbeul
            </h2>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">CDEPS Yeumbeul</p>
                <p className="text-gray-500 text-sm">Dakar, Sénégal</p>
                <p className="text-green-600 text-sm mt-2">Parking gratuit disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;