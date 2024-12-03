import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  Clock, 
  Dog, 
  Cat,
  UserCheck,
  PawPrint 
} from 'lucide-react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    animalType: '',
    selectedDate: null,
    selectedTime: null
  });

  // Heures disponibles par jour (simulées)
  const availableHours = {
    '2024-02-15': ['09:00', '10:30', '14:00', '15:30', '17:00'],
    '2024-02-16': ['09:00', '11:00', '13:30', '16:00', '18:00'],
    '2024-02-17': ['10:00', '11:30', '14:30', '16:00']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (e) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: e.target.value,
      selectedTime: null
    }));
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({
      ...prev,
      selectedTime: time
    }));
  };

  const handleReservation = () => {
    const { firstName, lastName, city, animalType, selectedDate, selectedTime } = formData;
    
    if (firstName && lastName && city && animalType && selectedDate && selectedTime) {
      const whatsappMessage = `Bonjour, je souhaite réserver un rendez-vous :
- Nom : ${firstName} ${lastName}
- Ville : ${city}
- Type d'animal : ${animalType}
- Date : ${selectedDate}
- Heure : ${selectedTime}`;

      const whatsappUrl = `https://wa.me/237690685039?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const animalTypes = [
    { type: 'Chien', icon: <Dog className="w-6 h-6" /> },
    { type: 'Chat', icon: <Cat className="w-6 h-6" /> },
    { type: 'Poule', icon: <PawPrint className="w-6 h-6" /> },
    { type: 'Autre', icon: <PawPrint className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/5 via-blue-600/5 to-transparent pointer-events-none" />
        
        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-500 to-blue-500 p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                      <PawPrint className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                    Cabinet Vétérinaire Le Garrot
                  </h1>
                  <p className="text-sm text-gray-400">Réservation de Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu Principal de Réservation */}
        <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
          {/* Carte de Localisation */}
          <div className="mb-8 group">
            <div className="bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-bold text-xl">Localisation</h3>
                  <p className="text-gray-400">Lendi, Monté Maison Blanche</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Réservation */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-6 h-6 text-green-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                  Réservation de Consultation
                </h2>
              </div>

              {/* Informations Personnelles */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-gray-300">Prénom</label>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Votre prénom"
                    className="w-full bg-white/5 p-3 rounded-xl border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Nom</label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="w-full bg-white/5 p-3 rounded-xl border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Ville</label>
                  <input 
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Votre ville"
                    className="w-full bg-white/5 p-3 rounded-xl border border-white/10 text-white"
                  />
                </div>
              </div>

              {/* Sélection de Type d'Animal */}
              <div className="mb-6">
                <label className="block mb-4 text-gray-300">Type d'Animal</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {animalTypes.map((animal) => (
                    <button
                      key={animal.type}
                      onClick={() => handleInputChange({
                        target: { name: 'animalType', value: animal.type }
                      })}
                      className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                        formData.animalType === animal.type 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white/5 hover:bg-white/10 text-gray-300'
                      }`}
                    >
                      {animal.icon}
                      <span className="mt-2">{animal.type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sélection de Date */}
              <div className="mb-6">
                <label className="block mb-2 text-gray-300">Choisissez une date</label>
                <input 
                  type="date" 
                  onChange={handleDateChange}
                  className="w-full bg-white/5 p-3 rounded-xl border border-white/10 text-white"
                />
              </div>

              {/* Heures Disponibles */}
              {formData.selectedDate && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold text-gray-300">Créneaux Disponibles</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {availableHours[formData.selectedDate]?.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          formData.selectedTime === time 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bouton de Réservation */}
              {formData.firstName && formData.lastName && formData.city && formData.animalType && formData.selectedDate && formData.selectedTime && (
                <button 
                  onClick={handleReservation}
                  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Réserver sur WhatsApp
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrint className="w-6 h-6 text-green-500" />
            <p className="text-gray-400 text-sm">Cabinet Vétérinaire Le Garrot</p>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Cabinet Vétérinaire Le Garrot. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ReservationPage;