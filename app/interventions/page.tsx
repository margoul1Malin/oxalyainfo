'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InterventionsPage() {
  const [isClient, setIsClient] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Services d'intervention optimisés SEO
  const interventionServices = [
    {
      title: "Création Site Web Biganos",
      description: "Oxelya crée votre site web à Biganos avec expertise et passion. Solution complète de A à Z.",
      icon: "🌐",
      features: ["Design responsive", "Optimisation mobile", "SEO local Biganos", "Hébergement inclus"],
      price: "À partir de 250€",
      location: "Biganos"
    },
    {
      title: "Création Site Web Arcachon",
      description: "Développement web professionnel sur Arcachon. Oxelya accompagne votre projet digital.",
      icon: "🏖️",
      features: ["E-commerce", "Site vitrine", "Référencement Arcachon", "Maintenance incluse"],
      price: "À partir de 250€",
      location: "Arcachon"
    },
    {
      title: "Création Site Web Bordeaux",
      description: "Agence web Bordeaux - Oxelya développe des sites web innovants et performants.",
      icon: "🍷",
      features: ["Applications web", "Sites corporate", "SEO Bordeaux", "Support 24/7"],
      price: "À partir de 300€",
      location: "Bordeaux"
    },
    {
      title: "Interventions Techniques",
      description: "Maintenance, sécurité et optimisation de sites web existants partout en Gironde.",
      icon: "🔧",
      features: ["Dépannage urgent", "Optimisation vitesse", "Sécurisation", "Migration serveur"],
      price: "À partir de 80€/h",
      location: "Gironde"
    }
  ]

  // Témoignages clients
  const testimonials = [
    {
      name: "Marie L.",
      location: "Biganos",
      text: "Oxelya a créé un site magnifique pour mon commerce à Biganos. Service impeccable !",
      rating: 5
    },
    {
      name: "Pierre M.",
      location: "Arcachon",
      text: "Excellent travail d'Oxelya pour notre hôtel à Arcachon. Réservations en hausse !",
      rating: 5
    },
    {
      name: "Sophie D.",
      location: "Bordeaux",
      text: "L'équipe Oxelya à Bordeaux est très professionnelle. Notre site e-commerce fonctionne parfaitement.",
      rating: 5
    }
  ]

  // FAQ optimisée pour les variations orthographiques
  const faqData = [
    {
      question: "Oxelya vs Xelya vs Oxelia vs Oxalia - Quelle est la bonne orthographe ?",
      answer: "La bonne orthographe est OXELYA. Nous sommes souvent recherchés sous Xelya, Oxelia ou Oxalia, mais notre nom officiel est bien Oxelya. Notre expertise reste la même : création de sites web professionnels en Gironde."
    },
    {
      question: "Oxelya intervient-elle pour la création de sites web à Biganos ?",
      answer: "Oui ! Oxelya est spécialisée dans la création de sites web à Biganos. Nous connaissons parfaitement le marché local et créons des sites optimisés pour votre clientèle de Biganos et ses environs."
    },
    {
      question: "Pourquoi choisir Oxelya pour un site web à Arcachon ?",
      answer: "Oxelya maîtrise les spécificités du marché d'Arcachon (tourisme, commerce local, saisonnalité). Nous créons des sites web adaptés à votre activité sur le Bassin d'Arcachon avec un référencement local optimisé."
    },
    {
      question: "Oxelya crée-t-elle des sites web professionnels à Bordeaux ?",
      answer: "Absolument ! Oxelya développe des sites web haut de gamme à Bordeaux pour entreprises, commerces et startups. Notre équipe bordelaise vous accompagne de la conception à la mise en ligne."
    },
    {
      question: "Oxelya propose-t-elle des interventions d'urgence ?",
      answer: "Oui, Oxelya intervient en urgence 24/7 sur tout le territoire girondin : Biganos, Arcachon, Bordeaux et environs. Problèmes techniques, piratage, panne serveur - nous intervenons rapidement."
    },
    {
      question: "Quels sont les tarifs d'Oxelya pour la création de sites web ?",
      answer: "Nos tarifs débutent à 1200€ pour un site vitrine (Biganos), 1500€ pour un site e-commerce (Arcachon), et 2000€ pour des projets complexes (Bordeaux). Devis gratuit et personnalisé."
    }
  ]

  // Zones géographiques
  const serviceAreas = [
    { name: "Biganos", icon: "🌲", specialty: "Sites locaux" },
    { name: "Arcachon", icon: "⛵", specialty: "E-commerce" },
    { name: "Bordeaux", icon: "🏛️", specialty: "Corporate" },
    { name: "Gironde", icon: "🗺️", specialty: "Interventions" }
  ]

  // Version statique pour SEO
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
        <Navigation />
        
        {/* Hero Section SEO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{
                  left: `${10 + i * 8}%`,
                  top: `${15 + (i % 4) * 25}%`,
                }}
              >
                {['🌐', '🏖️', '🍷', '🔧', '⚡', '🚀', '📱', '💻', '🎨', '📈', '🛡️', '⭐'][i]}
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
              Oxelya - Création Sites Web
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Biganos • Arcachon • Bordeaux • Gironde
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-orange-400">Oxelya</strong> (aussi recherché sous Xelya, Oxelia, Oxalia) 
              est votre partenaire création de sites web en Gironde. 
              <br />
              <span className="text-white">Spécialistes : création site web Biganos, création site web Arcachon, création site web Bordeaux</span>
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <Link href="https://www.oxelya.com/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Devis Gratuit
                </button>
              </Link>
              <Link href="https://www.margoul1.dev">
                <button className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
                  Portfolio
                </button>
              </Link>
            </div>

            {/* Zones d'intervention */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">{area.icon}</div>
                  <h3 className="text-white font-bold">{area.name}</h3>
                  <p className="text-gray-400 text-sm">{area.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services par Zone */}
        <section className="py-24 bg-gradient-to-r from-gray-900/95 to-black/95">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Nos Services par Zone
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Création de sites web professionnels adaptés à chaque territoire
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {interventionServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-orange-400 mb-6">{service.price}</div>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-orange-400 text-lg">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages Clients */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Témoignages Clients
              </h2>
              <p className="text-xl text-gray-300">
                Ils ont fait confiance à Oxelya
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-orange-400">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="py-24 bg-gradient-to-r from-gray-900/95 to-black/95">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-300">
                Tout savoir sur Oxelya et nos services web
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Prêt à créer votre site web ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Oxelya vous accompagne dans votre projet digital à Biganos, Arcachon, Bordeaux et partout en Gironde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://www.oxelya.com/contact">
                <button className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Demander un Devis Gratuit
                </button>
              </Link>
              <Link href="https://www.oxelya.com/services">
                <button className="px-12 py-6 border-2 border-orange-600 rounded-full font-bold text-xl hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
                Voir nos Réalisations
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <Navigation />

      {/* Hero Section Animé */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 25}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              {['🌐', '🏖️', '🍷', '🔧', '⚡', '🚀', '📱', '💻', '🎨', '📈', '🛡️', '⭐'][i]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
              Oxelya - Création Sites Web
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Biganos • Arcachon • Bordeaux • Gironde
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-orange-400">Oxelya</strong> (aussi recherché sous Xelya, Oxelia, Oxalia) 
              est votre partenaire création de sites web en Gironde. 
              <br />
              <span className="text-white">Spécialistes : création site web Biganos, création site web Arcachon, création site web Bordeaux</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <Link href="https://www.oxelya.com/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
            >
              Devis Gratuit
            </motion.button>
            </Link>
            <Link href="https://www.margoul1.dev">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300"
            >
              Portfolio
            </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-2">{area.icon}</div>
                <h3 className="text-white font-bold">{area.name}</h3>
                <p className="text-gray-400 text-sm">{area.specialty}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services par Zone Animé */}
      <section className="py-24 bg-gradient-to-r from-gray-900/95 to-black/95">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nos Services par Zone
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Création de sites web professionnels adaptés à chaque territoire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {interventionServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <motion.div 
                  className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-orange-400 mb-6">{service.price}</div>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      <span className="text-orange-400 text-lg">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <span className="inline-block bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Clients Animé */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-300">
              Ils ont fait confiance à Oxelya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-orange-400 text-xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + index * 0.5 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <h4 className="text-white font-bold group-hover:text-orange-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-orange-400">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Interactive */}
      <section className="py-24 bg-gradient-to-r from-gray-900/95 to-black/95">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-300">
              Tout savoir sur Oxelya et nos services web
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="p-8 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white pr-4">{item.question}</h3>
                    <motion.span
                      className="text-orange-400 text-2xl"
                      animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                      marginTop: expandedFaq === index ? 16 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Prêt à créer votre site web ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Oxelya vous accompagne dans votre projet digital à Biganos, Arcachon, Bordeaux et partout en Gironde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://www.oxelya.com/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Demander un Devis Gratuit
                <motion.span
                  className="ml-3 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </motion.button>
              </Link>
              <Link href="https://www.margoul1.dev">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border-2 border-orange-600 rounded-full font-bold text-xl hover:border-orange-500 hover:text-orange-300 transition-all duration-300 group"
              >
                Voir nos Réalisations
                <motion.span
                  className="ml-3 inline-block"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ⭐
                </motion.span>
              </motion.button>
              </Link>
            </div>

            {/* Statistiques impressionnantes */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { number: "150+", label: "Sites créés", icon: "🌐" },
                { number: "98%", label: "Clients satisfaits", icon: "😊" },
                { number: "24/7", label: "Support technique", icon: "🛠️" },
                { number: "5⭐", label: "Note moyenne", icon: "⭐" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer SEO */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Colonne 1 - Oxelya */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Oxelya</h3>
              <p className="text-gray-400 mb-4">
                Agence web spécialisée en création de sites internet en Gironde.
              </p>
              <div className="text-gray-400 text-sm">
                <p>Aussi connu sous :</p>
                <p className="text-orange-400">Xelya • Oxelia • Oxalia</p>
              </div>
            </div>

            {/* Colonne 2 - Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Création de sites web</p>
                <p>E-commerce</p>
                <p>Applications web</p>
                <p>SEO & Référencement</p>
                <p>Maintenance web</p>
                <p>Interventions techniques</p>
              </div>
            </div>

            {/* Colonne 3 - Zones */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zones d&apos;intervention</h3>
              <div className="space-y-2 text-gray-400">
                <p>🌲 Création site web Biganos</p>
                <p>⛵ Création site web Arcachon</p>
                <p>🍷 Création site web Bordeaux</p>
                <p>🗺️ Toute la Gironde</p>
                <p>Bassin d&apos;Arcachon</p>
                <p>Métropole bordelaise</p>
              </div>
            </div>

            {/* Colonne 4 - Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 contact@oxelya.com</p>
                <p>📱 Devis gratuit 24/7</p>
                <p>🚀 Projet urgent ?</p>
                <p>💬 Consultation gratuite</p>
              </div>
              <div className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Nous contacter
                </motion.button>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Oxelya - Création de sites web Biganos, Arcachon, Bordeaux
              </div>
              <div className="flex gap-6 text-gray-400 text-sm">
                <span>Mentions légales</span>
                <span>CGV</span>
                <span>Politique de confidentialité</span>
              </div>
            </div>
          </div>

          {/* SEO Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Oxelya (orthographe correcte vs Xelya, Oxelia, Oxalia) - Agence web spécialisée création site web Biganos, 
              création site web Arcachon, création site web Bordeaux. Services professionnels : sites vitrine, e-commerce, 
              applications web, SEO, maintenance et interventions techniques. Devis gratuit pour votre projet digital en Gironde.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Composant Navigation mis à jour
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white font-winky line-through opacity-60">
              Oxalya
            </div>
            <div className="text-2xl font-bold text-orange-400 font-winky">
              Oxelya
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/creation-site-web" className="text-gray-300 hover:text-orange-400 transition-colors">
              Création Site Web
            </Link>
            <Link href="/informations" className="text-gray-300 hover:text-orange-400 transition-colors">
              Informations
            </Link>
            <Link href="/interventions" className="text-gray-300 hover:text-orange-400 transition-colors">
              Interventions
            </Link>
            <Link href="https://www.oxelya.com" className="text-gray-300 hover:text-orange-400 transition-colors">
              Site Officiel
            </Link>
            <Link href="https://www.oxelya.com/contact" className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
