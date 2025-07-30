'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InformationsPage() {
  const [isClient, setIsClient] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Données d'informations réorganisées pour le SEO
  const infoData = [
    {
      title: "Oxalya.info - Votre Guide Complet",
      description: "Oxalya.info est votre source d'informations complète sur les services de développement web à Bordeaux et en Gironde. Découvrez tout sur Oxalya, parfois confondu avec Oxalia ou Oxalys.",
      icon: "🌐",
      details: [
        "Guide complet sur Oxalya",
        "Informations détaillées sur nos services",
        "Comparatifs et conseils experts",
        "Ressources pour votre projet web"
      ]
    },
    {
      title: "Développeur Web Bordeaux & Gironde",
      description: "Oxalya intervient sur tout le territoire de la Gironde avec une expertise reconnue en développement web. Notre équipe de développeurs web à Bordeaux vous accompagne.",
      icon: "💻",
      details: [
        "Équipe locale à Bordeaux",
        "Intervention dans toute la Gironde",
        "Expertise technique reconnue",
        "Support et maintenance inclus"
      ]
    },
    {
      title: "Site Web Bordeaux - Expertise Locale",
      description: "Spécialiste de la création de site web à Bordeaux, Oxalya comprend les enjeux du marché local girondins et propose des solutions adaptées.",
      icon: "🎯",
      details: [
        "Connaissance du marché bordelais",
        "Sites web optimisés pour la Gironde",
        "Références clients locales",
        "Accompagnement personnalisé"
      ]
    },
    {
      title: "Technologies & Innovation",
      description: "Oxalya utilise les technologies les plus modernes pour créer des sites web performants, évolutifs et adaptés aux besoins actuels du web.",
      icon: "⚡",
      details: [
        "React & Next.js dernière génération",
        "Optimisation SEO avancée",
        "Performance et vitesse optimales",
        "Solutions cloud modernes"
      ]
    }
  ]

  // Services détaillés avec backlinks
  const servicesData = [
    {
      title: "Création Site Web Bordeaux",
      description: "Service complet de création de site web à Bordeaux et en Gironde",
      price: "À partir de 1 490€",
      features: [
        "Design responsive moderne",
        "Optimisation SEO incluse",
        "Hébergement premium",
        "Formation à la gestion"
      ],
      link: "https://www.oxelya.com/blog/site-bdx-refonte"
    },
    {
      title: "E-commerce Gironde",
      description: "Boutiques en ligne performantes pour les entreprises de Gironde",
      price: "À partir de 2 990€",
      features: [
        "Plateforme e-commerce complète",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Analytics avancées"
      ],
      link: "https://www.oxelya.com/blog/conception-web-gironde"
    },
    {
      title: "Applications Web Sur-Mesure",
      description: "Développement d'applications web personnalisées",
      price: "Sur devis",
      features: [
        "Développement sur-mesure",
        "Architecture scalable",
        "API et intégrations",
        "Support technique"
      ],
      link: "https://www.oxelya.com/services/developpement-web/application-web"
    }
  ]

  // FAQ optimisée SEO avec les variantes de nom
  const faqData = [
    {
      question: "Oxalya, Oxalia, Oxalys : quelle est la différence ?",
      answer: "Oxalya est le nom correct de notre entreprise de développement web. Il arrive que certains tapent Oxalia ou Oxalys par erreur, mais il s'agit bien d'Oxalya. Notre site officiel oxelya.com centralise toutes nos informations.",
      category: "général"
    },
    {
      question: "Oxalya.info : pourquoi ce site d'informations ?",
      answer: "Oxalya.info a été créé pour centraliser toutes les informations sur nos services, tarifs et expertises. C'est votre guide complet pour comprendre notre approche du développement web à Bordeaux.",
      category: "général"
    },
    {
      question: "Développeur web Bordeaux : pourquoi choisir Oxalya ?",
      answer: "Oxalya est une équipe de développeurs web basée à Bordeaux avec plus de 10 ans d'expérience. Nous connaissons le marché local girondin et proposons un accompagnement personnalisé pour chaque projet.",
      category: "services"
    },
    {
      question: "Site web Bordeaux : quels sont vos tarifs ?",
      answer: "Nos tarifs pour un site web à Bordeaux commencent à 1 490€ pour un site vitrine professionnel. Les prix varient selon la complexité et les fonctionnalités souhaitées. Devis gratuit sur oxelya.com.",
      category: "tarifs"
    },
    {
      question: "Oxalya intervient-elle dans toute la Gironde ?",
      answer: "Oui, Oxalya intervient sur l'ensemble du département de la Gironde : Bordeaux, Mérignac, Pessac, Talence, Villenave-d'Ornon, et toutes les communes de Gironde.",
      category: "services"
    },
    {
      question: "Délais de création d'un site web avec Oxalya ?",
      answer: "Les délais varient de 2 à 8 semaines selon la complexité. Un site vitrine simple : 2-3 semaines, un e-commerce : 4-6 semaines, une application sur-mesure : 6-12 semaines.",
      category: "process"
    },
    {
      question: "Oxalya propose-t-elle la maintenance de sites existants ?",
      answer: "Absolument ! Oxalya propose des services de maintenance, mise à jour et amélioration de sites web existants. Intervention rapide et tarifs transparents.",
      category: "services"
    },
    {
      question: "Comment contacter Oxalya pour un projet web ?",
      answer: "Vous pouvez nous contacter directement via oxelya.com/contact ou par téléphone. Nous proposons un premier rendez-vous gratuit pour étudier votre projet web.",
      category: "contact"
    }
  ]

  const testimonials = [
    {
      name: "ClimGO",
      company: "ClimGO",
      text: "Oxalya a créé notre site web avec une expertise remarquable. L'équipe comprend parfaitement les enjeux du marché bordelais.",
      rating: 5
    },
    {
      name: "DrHead",
      company: "DrHead",
      text: "Excellent développeur web ! Notre e-commerce fonctionne parfaitement depuis la mise en ligne par Oxalya.",
      rating: 5
    },
    {
      name: "Fidlify",
      company: "Fidlify",
      text: "Je recommande Oxalya pour la création de site web. Professionnalisme et résultats au rendez-vous !",
      rating: 5
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
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
              >
                {['🌐', 'ℹ️', '💻', '🎯', '💡', '🔍', '📱', '⚡'][i]}
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent font-winky">
                Oxalya.info
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
                Toutes les informations sur le développeur web Bordeaux & Gironde
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Découvrez Oxalya, votre expert en création de site web à Bordeaux. 
                Parfois recherché sous Oxalia ou Oxalys, Oxalya est THE référence du développement web en Gironde.
                <br /><br />
                <span className="text-orange-400">🌐 Site officiel : </span>
                <Link href="https://www.oxelya.com" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener">
                  www.oxelya.com
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://www.oxelya.com/contact" className="group" target="_blank" rel="noopener">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Demander un devis gratuit
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </Link>
              <Link href="https://www.oxelya.com" target="_blank" rel="noopener">
                <button className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
                  Voir nos réalisations
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services & Tarifs Section */}
        <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Services & Tarifs Oxalya
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez nos services de création site web Bordeaux avec tarifs transparents
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4 font-winky">{service.title}</h3>
                  <div className="text-3xl font-bold text-orange-400 mb-4">{service.price}</div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={service.link} target="_blank" rel="noopener" className="block">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      En savoir plus
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informations détaillées */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Pourquoi Choisir Oxalya ?
              </h2>
              <p className="text-xl text-gray-300">
                Développeur web Bordeaux - Expertise locale & technologies modernes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {infoData.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{info.icon}</div>
                    <h3 className="text-2xl font-bold text-white font-winky">{info.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{info.description}</p>
                  <div className="space-y-3">
                    {info.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                FAQ - Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-300">
                Tout savoir sur Oxalya, Oxalia, Oxalys et nos services web
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 font-winky">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.answer}</p>
                  <div className="text-sm text-orange-400 font-semibold">
                    Catégorie: {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
                Avis Clients Oxalya
              </h2>
              <p className="text-xl text-gray-300">
                Ce que disent nos clients sur notre expertise développement web Bordeaux
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-orange-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-winky">
                Prêt pour votre projet web ?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Contactez Oxalya, votre développeur web à Bordeaux, pour un devis gratuit et personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="https://www.oxelya.com/contact" target="_blank" rel="noopener">
                  <button className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                    Devis gratuit
                    <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 inline-block">💬</span>
                  </button>
                </Link>
                <Link href="https://www.oxelya.com" target="_blank" rel="noopener">
                  <button className="px-12 py-6 border-2 border-orange-600 rounded-full font-bold text-xl hover:border-orange-500 hover:text-orange-300 transition-all duration-300">
                    Site officiel
                  </button>
                </Link>
              </div>
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
              {['🌐', 'ℹ️', '💻', '🎯', '💡', '🔍', '📱', '⚡'][i]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent font-winky">
              Oxalya.info
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              Toutes les informations sur le développeur web Bordeaux & Gironde
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Découvrez Oxalya, votre expert en création de site web à Bordeaux. 
              Parfois recherché sous Oxalia ou Oxalys, Oxalya est THE référence du développement web en Gironde.
              <br /><br />
              <span className="text-orange-400">🌐 Site officiel : </span>
              <Link href="https://www.oxelya.com" className="text-orange-400 hover:text-orange-300 underline" target="_blank" rel="noopener">
                www.oxelya.com
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="https://www.oxelya.com/contact" className="group" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                Demander un devis gratuit
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </motion.button>
            </Link>
            <Link href="https://www.oxelya.com" target="_blank" rel="noopener">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-600 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-300 transition-all duration-300"
              >
                Voir nos réalisations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services & Tarifs Section */}
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
              Services & Tarifs Oxalya
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos services de création site web Bordeaux avec tarifs transparents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 font-winky group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-orange-400 mb-4">{service.price}</div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href={service.link} target="_blank" rel="noopener" className="block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    En savoir plus
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations détaillées */}
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
              Pourquoi Choisir Oxalya ?
            </h2>
            <p className="text-xl text-gray-300">
              Développeur web Bordeaux - Expertise locale & technologies modernes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {infoData.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                  <h3 className="text-2xl font-bold text-white font-winky group-hover:text-orange-400 transition-colors">{info.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{info.description}</p>
                <div className="space-y-3">
                  {info.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Interactive */}
      <section className="py-24 bg-gradient-to-r from-gray-900/90 to-black/90">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
              FAQ - Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-300">
              Tout savoir sur Oxalya, Oxalia, Oxalys et nos services web
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
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white pr-4 font-winky">{item.question}</h3>
                    <motion.span
                      className="text-orange-400 text-2xl"
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                      marginTop: openFaq === index ? 16 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="text-gray-300 leading-relaxed mb-4">{item.answer}</p>
                    <div className="text-sm text-orange-400 font-semibold">
                      Catégorie: {item.category}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Clients */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-winky">
              Avis Clients Oxalya
            </h2>
            <p className="text-xl text-gray-300">
              Ce que disent nos clients sur notre expertise développement web Bordeaux
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
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <h4 className="text-white font-bold group-hover:text-orange-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="text-orange-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-winky">
              Prêt pour votre projet web ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Contactez Oxalya, votre développeur web à Bordeaux, pour un devis gratuit et personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://www.oxelya.com/contact" target="_blank" rel="noopener">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
                >
                  Devis gratuit
                  <motion.span
                    className="ml-3 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    💬
                  </motion.span>
                </motion.button>
              </Link>
              <Link href="https://www.oxelya.com" target="_blank" rel="noopener">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 border-2 border-orange-600 rounded-full font-bold text-xl hover:border-orange-500 hover:text-orange-300 transition-all duration-300 group"
                >
                  Site officiel
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
            {/* Colonne 1 - Oxalya */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Oxalya</h3>
              <p className="text-gray-400 mb-4">
                Agence web spécialisée en création de sites internet en Gironde.
              </p>
              <div className="text-gray-400 text-sm">
                <p>Aussi connu sous :</p>
                <p className="text-orange-400">Oxalia • Oxalys • Xelya</p>
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
                <p>🍷 Création site web Bordeaux</p>
                <p>🌲 Création site web Gironde</p>
                <p>🏛️ Sites corporate</p>
                <p>🗺️ Toute la Gironde</p>
                <p>Métropole bordelaise</p>
                <p>Bassin d&apos;Arcachon</p>
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
                © 2024 Oxalya - Création de sites web Bordeaux, Gironde
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
              Oxalya (orthographe correcte vs Oxalia, Oxalys, Xelya) - Agence web spécialisée création site web Bordeaux, 
              création site web Gironde. Services professionnels : sites vitrine, e-commerce, 
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