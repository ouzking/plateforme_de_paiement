import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  CheckCircle,
  Download,
  Mail,
  Calendar,
  MapPin,
  Clock,
  User,
  CreditCard,
} from "lucide-react";

interface PaymentData {
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
    company?: string;
    specialRequests?: string;
  };
  totalAmount: number;
  totalTickets: number;
  paymentMethod: string;
  paymentPhone: string;
  transactionId: string;
  paymentDate: string;
}

const Confirmation = () => {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("paymentData");
    if (data) {
      setPaymentData(JSON.parse(data));
    }
  }, []);

  const downloadTicket = () => {
    if (!paymentData) return;

    const { tickets, formData, totalAmount, transactionId } = paymentData;

    const ticketContent = `
GALA 2025 - BILLET D'ENTRÉE
==============================

Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}

Date: 24 Décembre 2025
Lieu: CDEPS Yeumbeul
Heure: 19h00 - 02h00

Billets:
${tickets.standard > 0 ? `Standard: ${tickets.standard}` : ""}
${tickets.vip > 0 ? `VIP: ${tickets.vip}` : ""}
${tickets.table > 0 ? `Table Privée: ${tickets.table}` : ""}

Total Payé: ${totalAmount.toLocaleString()} FCFA
Transaction ID: ${transactionId}

==============================
Présentez ce billet à l'entrée
    `;

    const blob = new Blob([ticketContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `billet-gala-2025-${transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des informations...</p>
        </div>
      </div>
    );
  }

  const qrData = JSON.stringify({
    transactionId: paymentData.transactionId,
    name: `${paymentData.formData.firstName} ${paymentData.formData.lastName}`,
    email: paymentData.formData.email,
    tickets: paymentData.tickets,
    amount: paymentData.totalAmount,
  });

  const { tickets, formData } = paymentData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paiement Confirmé !
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Votre réservation a été effectuée avec succès
          </p>
          <p className="text-lg text-green-600 font-semibold">
            Transaction ID: {paymentData.transactionId}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Code & Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Votre Billet Électronique
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl mb-6 inline-block">
              <QRCode
                value={qrData}
                size={200}
                style={{ height: "200px", maxWidth: "100%", width: "100%" }}
              />
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Présentez ce QR code à l'entrée de l'événement
            </p>

            <div className="space-y-3">
              <button
                onClick={downloadTicket}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Télécharger le Billet
              </button>

              <button
                onClick={() => window.print()}
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
              >
                Imprimer le Billet
              </button>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Détails de la Réservation
            </h2>

            <div className="space-y-6">
              {/* Event Info */}
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Informations Événement
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <span>27 Décembre 2025</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>CDEPS Yeumbeul</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span>19h00 - 02h00</span>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Informations Personnelles
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nom complet:</span>
                    <span className="font-medium">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Téléphone:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entreprise:</span>
                      <span className="font-medium">{formData.company}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tickets */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Billets Réservés
                </h3>
                <div className="space-y-2 text-sm">
                  {tickets.standard > 0 && (
                    <div className="flex justify-between bg-gray-50 p-2 rounded">
                      <span>Standard</span>
                      <span className="font-medium">
                        {tickets.standard} × 10,000 FCFA
                      </span>
                    </div>
                  )}
                  {tickets.vip > 0 && (
                    <div className="flex justify-between bg-gray-50 p-2 rounded">
                      <span>VIP</span>
                      <span className="font-medium">
                        {tickets.vip} × 25,000 FCFA
                      </span>
                    </div>
                  )}
                  {tickets.table > 0 && (
                    <div className="flex justify-between bg-gray-50 p-2 rounded">
                      <span>Table Privée</span>
                      <span className="font-medium">
                        {tickets.table} × 35,000 FCFA
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Informations Paiement
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mode de paiement:</span>
                    <span className="font-medium capitalize">
                      {paymentData.paymentMethod}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro:</span>
                    <span className="font-medium">{paymentData.paymentPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date de paiement:</span>
                    <span className="font-medium">
                      {new Date(paymentData.paymentDate).toLocaleDateString(
                        "fr-FR"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">
                      Total payé:
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {paymentData.totalAmount.toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              {formData.specialRequests && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Demandes Spéciales
                  </h3>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    {formData.specialRequests}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Email Confirmation Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-blue-600 mr-3" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Confirmation par email envoyée</p>
              <p>
                Un email de confirmation avec tous les détails a été envoyé à{" "}
                {formData.email}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200"
          >
            Retour à l'Accueil
          </Link>

          <div className="text-sm text-gray-600">
            <p>Pour toute question, contactez-nous au +221 XX XXX XX XX</p>
            <p>ou par email à info@gala2025.sn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
