import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Users, Star, Gift, Crown } from 'lucide-react';

interface TicketSelection {
  standard: number;
  vip: number;
  table: number;
}

const Reservation = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<TicketSelection>({
    standard: 0,
    vip: 0,
    table: 0
  });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    specialRequests: ''
  });

  const ticketTypes = [
    {
      id: 'standard',
      name: 'Standard',
      price: 10000,
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: 'Dîner complet avec animations',
      features: ['Dîner 3 services', 'Boissons incluses', 'Animations live', 'Accès piste de danse'],
      color: 'from-gray-50 to-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 25000,
      icon: <Star className="h-6 w-6 text-green-600" />,
      description: 'Expérience premium exclusive',
      features: ['Menu gastronomique', 'Bar premium illimité', 'Table privilégiée', 'Service personnalisé', 'Cadeaux exclusifs'],
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
      popular: true
    },
    {
      id: 'table',
      name: 'Table Privée',
      price: 35000,
      icon: <Crown className="h-6 w-6 text-green-600" />,
      description: 'Table de 8 personnes avec service dédié',
      features: ['Table de 8 personnes', 'Menu prestige', 'Service dédié', 'Espace privatisé', 'Photographe personnel'],
      color: 'from-green-100 to-green-50',
      borderColor: 'border-green-400'
    }
  ];

  const updateTicketCount = (type: keyof TicketSelection, increment: boolean) => {
    setTickets(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1))
    }));
  };

  const getTotalAmount = () => {
    return (tickets.standard * 10000) + (tickets.vip * 25000) + (tickets.table * 35000);
  };

  const getTotalTickets = () => {
    return tickets.standard + tickets.vip + tickets.table;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (getTotalTickets() === 0) {
      alert('Veuillez sélectionner au moins un billet');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Store reservation data in localStorage for the payment page
    localStorage.setItem('reservationData', JSON.stringify({
      tickets,
      formData,
      totalAmount: getTotalAmount(),
      totalTickets: getTotalTickets()
    }));
    
    navigate('/payment');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Réservation pour le Gala 2025
          </h1>
          <p className="text-xl text-gray-600">
            Sélectionnez vos billets et complétez votre réservation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Ticket Selection */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Gift className="h-6 w-6 mr-3 text-green-600" />
              Sélection des Billets
            </h2>
            
            <div className="grid gap-6">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`relative bg-gradient-to-r ${ticket.color} border-2 ${ticket.borderColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  {ticket.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Populaire
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center mb-2">
                        {ticket.icon}
                        <h3 className="text-xl font-bold text-gray-900 ml-3">
                          {ticket.name}
                        </h3>
                        <span className="ml-4 text-2xl font-bold text-green-600">
                          {ticket.price.toLocaleString()} FCFA
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {ticket.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-white rounded-full border-2 border-green-200">
                        <button
                          type="button"
                          onClick={() => updateTicketCount(ticket.id as keyof TicketSelection, false)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold text-gray-900">
                          {tickets[ticket.id as keyof TicketSelection]}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateTicketCount(ticket.id as keyof TicketSelection, true)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-green-600" />
              Informations Personnelles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Votre nom"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise/Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Nom de votre entreprise (optionnel)"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Demandes Spéciales
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Allergies alimentaires, besoins particuliers, etc."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Summary */}
          {getTotalTickets() > 0 && (
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Récapitulatif de la Réservation</h2>
              
              <div className="space-y-3 mb-6">
                {tickets.standard > 0 && (
                  <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-3">
                    <span>{tickets.standard} Billet(s) Standard</span>
                    <span className="font-semibold">{(tickets.standard * 10000).toLocaleString()} FCFA</span>
                  </div>
                )}
                {tickets.vip > 0 && (
                  <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-3">
                    <span>{tickets.vip} Billet(s) VIP</span>
                    <span className="font-semibold">{(tickets.vip * 25000).toLocaleString()} FCFA</span>
                  </div>
                )}
                {tickets.table > 0 && (
                  <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-3">
                    <span>{tickets.table} Table(s) Privée(s)</span>
                    <span className="font-semibold">{(tickets.table * 35000).toLocaleString()} FCFA</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-white border-opacity-30 pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total à Payer</span>
                  <span>{getTotalAmount().toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={getTotalTickets() === 0}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Procéder au Paiement
            </button>
            {getTotalTickets() === 0 && (
              <p className="text-gray-500 mt-2 text-sm">
                Sélectionnez au moins un billet pour continuer
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;