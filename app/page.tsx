'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OxalyaInfoPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // FAQ Data
  const faqData = [
    {
      question: "Qu'est-ce qu'Oxalya ?",
      answer: "Oxalya est une entreprise de développement web spécialisée dans la création de sites internet modernes et performants. Nous accompagnons les entreprises dans leur transformation digitale avec des solutions sur mesure."
    },
    {
      question: "Oxalya ou Oxelya : quelle est la différence ?",
      answer: "Oxalya et Oxelya sont deux noms similaires mais distincts. Oxalya est notre marque de développement web, tandis qu'Oxelya peut faire référence à d'autres services. Nous sommes spécialisés dans la création de sites web professionnels."
    },
    {
      question: "Quels services propose Oxalya ?",
      answer: "Nous proposons une gamme complète de services : sites vitrine, e-commerce, applications web, landing pages, et sites événementiels. Chaque projet est développé avec les technologies les plus récentes."
    },
    {
      question: "Comment contacter Oxalya ?",
      answer: "Vous pouvez nous contacter via notre formulaire de contact, par email ou par téléphone. Notre équipe est disponible pour répondre à toutes vos questions sur nos services de développement web."
    },
    {
      question: "Oxalya est-il fiable pour mon projet web ?",
      answer: "Absolument. Oxalya dispose d'une expertise reconnue dans le développement web avec de nombreuses références clients satisfaits. Nous garantissons la qualité et la performance de tous nos projets."
    },
    {
      question: "Oxalya vs Xelya : quelle entreprise choisir ?",
      answer: "Oxalya se distingue par son expertise en développement web et ses solutions sur mesure. Nous créons des sites web modernes, performants et optimisés pour vos besoins spécifiques."
    },
    {
      question: "Oxalya propose-t-elle des services de création de sites web ?",
      answer: "Oui, Oxalya est spécialisée dans la création de sites web professionnels. Nous développons des sites vitrine, e-commerce, applications web et landing pages avec les technologies les plus récentes."
    },
    {
      question: "Oxalya et Oxelya : confusion fréquente ?",
      answer: "Effectivement, il y a souvent une confusion entre Oxalya et Oxelya. Oxalya est notre marque dédiée au développement web, tandis qu'Oxelya propose d'autres services. Nous sommes experts en création de sites web."
    },
    {
      question: "Xelya ou Oxalya pour mon projet digital ?",
      answer: "Oxalya est votre partenaire idéal pour tous vos projets web. Notre équipe expérimentée maîtrise toutes les technologies modernes et garantit des résultats exceptionnels pour votre présence en ligne."
    },
    {
      question: "Oxalya intervient-elle sur tout le territoire français ?",
      answer: "Oui, Oxalya intervient sur l'ensemble du territoire français. Nous créons des sites web pour des clients partout en France, avec un suivi de projet transparent et une communication régulière."
    },
    {
      question: "Oxalya vs Oxelya : tarifs et devis ?",
      answer: "Oxalya propose des tarifs transparents et compétitifs pour tous nos services de développement web. Nous établissons des devis personnalisés selon vos besoins spécifiques et votre budget."
    },
    {
      question: "Oxalya peut-elle créer un site web pour ma PME ?",
      answer: "Absolument ! Oxalya accompagne les PME dans leur transformation digitale. Nous créons des sites web professionnels adaptés aux besoins des petites et moyennes entreprises."
    },
    {
      question: "Oxalya et Xelya : quelle est la meilleure agence web ?",
      answer: "Oxalya se démarque par son expertise technique, son accompagnement personnalisé et ses résultats concrets. Nous créons des sites web qui génèrent de vrais résultats pour nos clients."
    },
    {
      question: "Oxalya propose-t-elle des services d'intervention technique ?",
      answer: "Oui, Oxalya propose des services d'intervention technique pour maintenir et optimiser vos sites web existants. Notre équipe intervient rapidement pour résoudre tous vos problèmes techniques."
    },
    {
      question: "Oxalya vs Oxelya : quelle différence de qualité ?",
      answer: "Oxalya garantit une qualité exceptionnelle dans tous ses projets. Nous utilisons les technologies les plus récentes et suivons les meilleures pratiques du développement web pour des résultats optimaux."
    }
  ]

  // Services Data
  const servicesData = [
    {
      title: "Sites Vitrine",
      description: "Présentez votre entreprise avec un site web professionnel et moderne",
      icon: "🌐",
      features: ["Design responsive", "SEO optimisé", "CMS facile", "Hébergement inclus"]
    },
    {
      title: "E-commerce",
      description: "Vendez en ligne avec une boutique performante et sécurisée",
      icon: "🛒",
      features: ["Paiements sécurisés", "Gestion des stocks", "Multi-langues", "Analytics intégrés"]
    },
    {
      title: "Applications Web",
      description: "Solutions sur mesure pour vos besoins métier spécifiques",
      icon: "⚙️",
      features: ["Architecture moderne", "API REST", "Base de données", "Maintenance"]
    },
    {
      title: "Landing Pages",
      description: "Pages optimisées pour maximiser vos conversions",
      icon: "🎯",
      features: ["A/B Testing", "Analytics avancés", "Design optimisé", "Intégrations"]
    }
  ]

  // Version statique pour les bots
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
        <Navigation />
        
        {/* Hero Section Statique */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                Oxalya - Développement Web
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
                Solutions digitales sur mesure pour votre entreprise
              </h2>
                          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Oxalya est votre partenaire de confiance pour tous vos projets web. 
              Sites vitrine, e-commerce, applications web : nous créons des solutions 
              modernes et performantes qui transforment votre vision en réalité digitale.
              <br /><br />
              <span className="text-orange-400">💡 Découvrez nos services complets sur </span>
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
                Découvrir nos services
              </button>
            </div>
          </div>
        </section>

        {/* À propos Section Statique */}
        <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                À propos d&apos;Oxalya
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez notre expertise en développement web et nos valeurs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-winky">Notre Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Chez Oxalya, nous croyons que chaque entreprise mérite un site web exceptionnel. 
                    Notre mission est de créer des expériences digitales qui transforment les visiteurs 
                    en clients fidèles, en utilisant les technologies les plus récentes et les meilleures 
                    pratiques du développement web.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-winky">Notre Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Avec plus de 10 ans d&apos;expérience dans le développement web, notre équipe maîtrise 
                    toutes les technologies modernes : React, Next.js, Node.js, et bien d&apos;autres. 
                    Nous créons des solutions robustes, évolutives et performantes.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-winky">Nos Valeurs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Qualité et excellence dans chaque projet</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Innovation et technologies de pointe</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Satisfaction client garantie</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Support et maintenance continue</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-winky">Pourquoi Choisir Oxalya ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Équipe expérimentée et passionnée</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Technologies modernes et sécurisées</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Suivi de projet transparent</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Résultats mesurables et ROI garanti</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section Statique */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Nos Services de Développement Web
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
        <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-300">
                Tout ce que vous devez savoir sur Oxalya
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
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Contactez Oxalya pour discuter de votre projet web. 
                Notre équipe est là pour vous accompagner à chaque étape.
              </p>
              
              <Link href="https://www.oxelya.com/contact">
                <button className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                  Contactez Oxalya
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              Oxalya - Développement Web
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              Solutions digitales sur mesure pour votre entreprise
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Oxalya est votre partenaire de confiance pour tous vos projets web. 
              Sites vitrine, e-commerce, applications web : nous créons des solutions 
              modernes et performantes qui transforment votre vision en réalité digitale.
              <br /><br />
              <span className="text-orange-400">💡 Découvrez nos services complets sur </span>
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
              Découvrir nos services
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* À propos Section */}
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
              À propos d&apos;Oxalya
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre expertise en développement web et nos valeurs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-winky">Notre Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Chez Oxalya, nous croyons que chaque entreprise mérite un site web exceptionnel. 
                  Notre mission est de créer des expériences digitales qui transforment les visiteurs 
                  en clients fidèles, en utilisant les technologies les plus récentes et les meilleures 
                  pratiques du développement web.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-winky">Notre Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Avec plus de 10 ans d&apos;expérience dans le développement web, notre équipe maîtrise 
                  toutes les technologies modernes : React, Next.js, Node.js, et bien d&apos;autres. 
                  Nous créons des solutions robustes, évolutives et performantes.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-winky">Nos Valeurs</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Qualité et excellence dans chaque projet</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Innovation et technologies de pointe</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Satisfaction client garantie</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Support et maintenance continue</span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-winky">Pourquoi Choisir Oxalya ?</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Équipe expérimentée et passionnée</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Technologies modernes et sécurisées</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Suivi de projet transparent</span>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Résultats mesurables et ROI garanti</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
              Nos Services de Développement Web
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
      <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
        <div className="w-90/100 mx-auto px-8">
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
              Tout ce que vous devez savoir sur Oxalya
            </p>
          </motion.div>

            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              {/* Section redirection vers oxelya.com */}
              <motion.div
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-winky">
                  Besoin de plus d&apos;informations ?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Découvrez tous nos services de développement web, nos réalisations et nos tarifs sur notre site officiel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="https://www.oxelya.com" className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-center">
                    Visiter oxelya.com
                  </Link>
                  <Link href="https://www.oxelya.com/contact" className="px-6 py-3 border-2 border-orange-600 rounded-full text-orange-400 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center">
                    Nous contacter
                  </Link>
                </div>
              </motion.div>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Contactez Oxalya euh Oxelya pour discuter de votre projet web. 
              Notre équipe est là pour vous accompagner à chaque étape.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Contactez <span className="text-orange-400 line-through">Oxalya</span> Oxelya
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 inline-block">💻</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Composant Navigation (à adapter selon vos besoins)
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
