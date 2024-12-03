import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Phone, MessageSquare, Mail, MapPin, Stethoscope, Syringe, Scissors, PawPrint, ShoppingCart, Users, HeartPulse, Award } from 'lucide-react';

const VeterinaryClinicDashboard = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/reservation');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: "Consultation et Soins",
      icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
      description: "Examens complets et personnalisés pour chaque animal de compagnie. Nos vétérinaires experts réalisent des consultations détaillées pour diagnostiquer et traiter divers problèmes de santé.",
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "Vaccination",
      icon: <Syringe className="w-6 h-6 text-green-500" />,
      description: "Protection complète pour vos animaux (chiens, chats, singes). Programmes de vaccination adaptés à l'âge et au mode de vie de chaque animal, conformes aux recommandations vétérinaires actuelles.",
      color: "from-green-500/10 to-green-600/10"
    },
    {
      name: "Chirurgie Animale",
      icon: <Scissors className="w-6 h-6 text-red-500" />,
      description: "Interventions chirurgicales sécurisées et professionnelles. Nos chirurgiens vétérinaires pratiquent des opérations de routine et complexes avec un équipement médical de pointe.",
      color: "from-red-500/10 to-red-600/10"
    },
    {
      name: "Projets d'Élevage",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      description: "Accompagnement complet pour vos projets d'élevage. Conseils techniques, suivi sanitaire, plan de reproduction et gestion du bien-être animal.",
      color: "from-purple-500/10 to-purple-600/10"
    },
    {
      name: "Produits Vétérinaires",
      icon: <ShoppingCart className="w-6 h-6 text-orange-500" />,
      description: "Large gamme de produits et accessoires vétérinaires. Alimentation spécialisée, médicaments, antiparasitaires, accessoires de soins et de confort pour vos animaux.",
      color: "from-orange-500/10 to-orange-600/10"
    }
  ];

  const contactChannels = [
    { 
      name: 'WhatsApp', 
      icon: <MessageSquare className="w-5 h-5" />, 
      number: '237690685039',
      color: 'from-green-500/20 to-green-600/20' 
    },
    { 
      name: 'Téléphone', 
      icon: <Phone className="w-5 h-5" />, 
      number: '+237 654249479',
      color: 'from-blue-500/20 to-blue-600/20' 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      number: 'contact@legarrot.cm',
      color: 'from-red-500/20 to-red-600/20' 
    }
  ];

  const animalImages = [
    { src: "/chien.jpg", alt: "Chien" },
    { src: "/chat.jpg", alt: "Chat" },
    { src: "/poule.jpg", alt: "Poules" },
    { src: "/porc.jpg", alt: "porc" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/5 via-blue-600/5 to-transparent pointer-events-none" />
        
        {/* Navigation */}
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-500 to-blue-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                        <PawPrint className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" />
                  </div>
                  <div className="block">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                      Cabinet Vétérinaire Le Garrot
                    </h1>
                    <p className="text-sm text-gray-400">Votre santé animale, notre priorité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with CTA */}
        <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
          <div className="mb-12 group">
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <HeartPulse className="w-6 h-6 text-green-500" />
                    <span className="text-sm text-green-400">Nouvelle approche de santé animale</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                    Protégez la santé de vos compagnons
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Offrez à vos animaux les meilleurs soins possibles avec notre équipe de professionnels dévoués.
                  </p>
                  <button 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group"              
                    onClick={handleAppointmentClick} 
                    >
                    Prendre Rendez-vous
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {animalImages.map((image, index) => (
                    <img 
                      key={index} 
                      src={image.src} 
                      alt={image.alt} 
                      className="rounded-2xl object-cover w-full h-40 hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
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

          {/* Services Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
              Nos Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className={`bg-gradient-to-br ${service.color} rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.name}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Channels */}
      <div className="px-4 sm:px-6 max-w-4xl mx-auto space-y-6 pb-12">
        <h4 className="text-sm font-medium text-gray-400 tracking-wider">CONTACTEZ-NOUS</h4>
        <div className="grid gap-3 sm:grid-cols-3">
          {contactChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.name === 'WhatsApp' ? `https://wa.me/${channel.number.replace(/\s+/g, '')}` : channel.name === 'Email' ? `mailto:${channel.number}` : `tel:${channel.number.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {channel.icon}
                  <span className="font-medium">{channel.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-sm text-gray-300 mt-2">{channel.number}</div>
            </a>
          ))}
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

export default VeterinaryClinicDashboard;