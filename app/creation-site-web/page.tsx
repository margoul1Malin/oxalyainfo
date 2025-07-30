'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CreationSiteWebPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Services de création de sites web
  const servicesData = [
    {
      title: "Sites Vitrine",
      description: "Présentez votre entreprise avec un site web professionnel et moderne",
      icon: "🌐",
      features: ["Design responsive", "SEO optimisé", "CMS facile", "Hébergement inclus"],
      price: "À partir de 1500€"
    },
    {
      title: "E-commerce",
      description: "Vendez en ligne avec une boutique performante et sécurisée",
      icon: "🛒",
      features: ["Paiements sécurisés", "Gestion des stocks", "Multi-langues", "Analytics intégrés"],
      price: "À partir de 3000€"
    },
    {
      title: "Landing Pages",
      description: "Pages optimisées pour maximiser vos conversions",
      icon: "🎯",
      features: ["A/B Testing", "Analytics avancés", "Design optimisé", "Intégrations"],
      price: "À partir de 800€"
    },
    {
      title: "Applications Web",
      description: "Solutions sur mesure pour vos besoins métier spécifiques",
      icon: "⚙️",
      features: ["Architecture moderne", "API REST", "Base de données", "Maintenance"],
      price: "Sur devis"
    }
  ]

  // FAQ spécifique création site web
  const faqData = [
    {
      question: "Combien coûte la création d'un site web avec Oxalya ?",
      answer: "Les tarifs varient selon vos besoins : sites vitrine à partir de 1500€, e-commerce à partir de 3000€, landing pages à partir de 800€. Nous établissons des devis personnalisés selon vos spécifications."
    },
    {
      question: "Oxalya vs Xelya pour la création de sites web ?",
      answer: "Oxalya se distingue par son expertise technique et son accompagnement personnalisé. Nous créons des sites web modernes, performants et optimisés pour vos besoins spécifiques."
    },
    {
      question: "Combien de temps pour créer un site web avec Oxalya ?",
      answer: "Les délais varient selon la complexité : 2-3 semaines pour un site vitrine, 4-6 semaines pour un e-commerce, 1-2 semaines pour une landing page. Nous respectons toujours les délais convenus."
    },
    {
      question: "Oxalya propose-t-elle la maintenance des sites web ?",
      answer: "Oui, Oxalya propose des services de maintenance et d'optimisation continue de vos sites web. Nous garantissons la sécurité, les mises à jour et le bon fonctionnement de votre site."
    },
    {
      question: "Oxalya peut-elle créer un site web pour ma PME ?",
      answer: "Absolument ! Oxalya accompagne les PME dans leur transformation digitale. Nous créons des sites web professionnels adaptés aux besoins et budgets des petites et moyennes entreprises."
    },
    {
      question: "Oxalya vs Oxelya : quelle différence pour la création de sites ?",
      answer: "Oxalya se spécialise dans la création de sites web modernes et performants. Notre équipe maîtrise les technologies les plus récentes et garantit des résultats exceptionnels."
    }
  ]

  // Version statique pour les bots
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
        <Navigation />
        
        {/* Hero Section Statique */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
            {/* Floating Elements Statiques */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
              >
                {['💻', '🌐', '⚡', '🚀', '🎯', '💡', '🔧', '📱'][i]}
              </div>
            ))}
          </div>

          {/* Hero Content Statique */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent font-winky">
                Création Site Web
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
                Sites web professionnels sur mesure par Oxalya
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Oxalya crée des sites web modernes, performants et optimisés pour votre entreprise. 
                Sites vitrine, e-commerce, landing pages : nous transformons votre vision en réalité digitale.
                <br /><br />
                <span className="text-orange-400">💡 Découvrez nos réalisations sur </span>
                <Link href="https://www.oxelya.com" className="text-orange-400 hover:text-orange-300 underline">
                  oxelya.com
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://www.oxelya.com/contact" className="group">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Demander un devis
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </section>

        {/* Services Section Statique */}
        <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Nos Services de Création de Sites Web
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des solutions complètes pour tous vos besoins digitaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 font-winky">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-orange-400 mb-4">{service.price}</div>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section Statique */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-300">
                Tout ce que vous devez savoir sur la création de sites web avec Oxalya
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 font-winky">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section Statique */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-winky">
                Prêt à créer votre site web ?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Contactez Oxalya pour discuter de votre projet de création de site web. 
                Notre équipe est là pour vous accompagner à chaque étape.
              </p>
              
              <Link href="https://www.oxelya.com/contact">
                <button className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                  Demander un devis
                  <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 inline-block">💻</span>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
          {/* Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              {['💻', '🌐', '⚡', '🚀', '🎯', '💡', '🔧', '📱'][i]}
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent font-winky">
              Création Site Web
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              Sites web professionnels sur mesure par Oxalya
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Oxalya crée des sites web modernes, performants et optimisés pour votre entreprise. 
              Sites vitrine, e-commerce, landing pages : nous transformons votre vision en réalité digitale.
              <br /><br />
              <span className="text-orange-400">💡 Découvrez nos réalisations sur </span>
              <Link href="https://www.oxelya.com" className="text-orange-400 hover:text-orange-300 underline">
                oxelya.com
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="https://www.oxelya.com/contact" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                Demander un devis
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300"
            >
              Voir nos réalisations
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
              Nos Services de Création de Sites Web
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-winky group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-orange-400 mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <span className="text-orange-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-300">
              Tout ce que vous devez savoir sur la création de sites web avec Oxalya
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-winky group-hover:text-orange-400 transition-colors">
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-winky">
              Prêt à créer votre site web ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Contactez Oxalya pour discuter de votre projet de création de site web. 
              Notre équipe est là pour vous accompagner à chaque étape.
            </p>
            
            <Link href="https://www.oxelya.com/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Demander un devis
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 inline-block">💻</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Composant Navigation
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

