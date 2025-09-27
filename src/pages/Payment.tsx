import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Shield, ArrowLeft, CheckCircle } from 'lucide-react';

interface ReservationData {
  tickets: {
    standard: number;
    vip: number;
    table: number;
  };
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    specialRequests: string;
  };
  totalAmount: number;
  totalTickets: number;
}

const Payment = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<'wave' | 'orange' | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    const data = localStorage.getItem('reservationData');
    if (!data) {
      navigate('/reservation');
      return;
    }
    setReservationData(JSON.parse(data));
  }, [navigate]);

  if (!reservationData) {
    return <div>Chargement...</div>;
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMethod || !phoneNumber) {
      alert('Veuillez sélectionner un mode de paiement et saisir votre numéro');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Store payment data
      const paymentData = {
        ...reservationData,
        paymentMethod: selectedMethod,
        paymentPhone: phoneNumber,
        transactionId: `TXN${Date.now()}`,
        paymentDate: new Date().toISOString()
      };
      
      localStorage.setItem('paymentData', JSON.stringify(paymentData));
      navigate('/confirmation');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/reservation')}
            className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour à la réservation
          </button>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Finaliser Votre Paiement
          </h1>
          <p className="text-xl text-gray-600">
            Choisissez votre mode de paiement sécurisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Récapitulatif de Commande
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Client</span>
                <span>{reservationData.formData.firstName} {reservationData.formData.lastName}</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Email</span>
                <span className="text-sm">{reservationData.formData.email}</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Téléphone</span>
                <span>{reservationData.formData.phone}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Billets Sélectionnés</h3>
              {reservationData.tickets.standard > 0 && (
                <div className="flex justify-between items-center py-2">
                  <span>{reservationData.tickets.standard} × Standard</span>
                  <span className="font-medium">{(reservationData.tickets.standard * 75000).toLocaleString()} FCFA</span>
                </div>
              )}
              {reservationData.tickets.vip > 0 && (
                <div className="flex justify-between items-center py-2">
                  <span>{reservationData.tickets.vip} × VIP</span>
                  <span className="font-medium">{(reservationData.tickets.vip * 120000).toLocaleString()} FCFA</span>
                </div>
              )}
              {reservationData.tickets.table > 0 && (
                <div className="flex justify-between items-center py-2">
                  <span>{reservationData.tickets.table} × Table Privée</span>
                  <span className="font-medium">{(reservationData.tickets.table * 800000).toLocaleString()} FCFA</span>
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total à Payer</span>
                <span className="text-green-600">{reservationData.totalAmount.toLocaleString()} FCFA</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-gray-600">
              <Shield className="h-4 w-4 mr-2 text-green-600" />
              Paiement 100% sécurisé
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Mode de Paiement
            </h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Methods */}
              <div className="grid grid-cols-1 gap-4">
                {/* Wave Payment */}
                <div
                  onClick={() => setSelectedMethod('wave')}
                  className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-200 ${
                    selectedMethod === 'wave'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedMethod === 'wave' ? 'border-green-500 bg-green-500' : 'border-gray-300'
                    }`}>
                      {selectedMethod === 'wave' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div className="flex items-center flex-1">
                      <Smartphone className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Wave</h3>
                        <p className="text-sm text-gray-600">Paiement mobile sécurisé</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orange Money Payment */}
                <div
                  onClick={() => setSelectedMethod('orange')}
                  className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-200 ${
                    selectedMethod === 'orange'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedMethod === 'orange' ? 'border-green-500 bg-green-500' : 'border-gray-300'
                    }`}>
                      {selectedMethod === 'orange' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div className="flex items-center flex-1">
                      <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Orange Money</h3>
                        <p className="text-sm text-gray-600">Paiement mobile Orange</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Number Input */}
              {selectedMethod && (
                <div className="animate-in slide-in-from-top duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone {selectedMethod === 'wave' ? 'Wave' : 'Orange Money'}
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder={selectedMethod === 'wave' ? '+221 7X XXX XX XX' : '+221 7X XXX XX XX'}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Assurez-vous que ce numéro correspond à votre compte {selectedMethod === 'wave' ? 'Wave' : 'Orange Money'}
                  </p>
                </div>
              )}

              {/* Security Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <div className="text-sm text-green-800">
                    <p className="font-medium">Paiement Sécurisé</p>
                    <p>Vos informations de paiement sont protégées et cryptées</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedMethod || !phoneNumber || isProcessing}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Traitement en cours...
                  </>
                ) : (
                  <>
                    Confirmer le Paiement
                    <span className="ml-3 font-bold">
                      {reservationData.totalAmount.toLocaleString()} FCFA
                    </span>
                  </>
                )}
              </button>
            </form>

            {/* Instructions */}
            {selectedMethod && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Instructions de Paiement</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Cliquez sur "Confirmer le Paiement"</li>
                  <li>2. Vous recevrez une notification sur votre téléphone</li>
                  <li>3. Saisissez votre code PIN pour confirmer</li>
                  <li>4. Vous recevrez une confirmation par SMS</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;