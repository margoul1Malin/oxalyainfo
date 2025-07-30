import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oxalya - Développement Web et Solutions Digitales",
  description:
    "Oxalya est votre partenaire de confiance pour tous vos projets web. Sites vitrine, e-commerce, applications web : découvrez nos services de développement web professionnels et sur mesure.",
  openGraph: {
    title: "Oxalya - Développement Web Professionnel",
    description:
      "Solutions digitales sur mesure pour votre entreprise. Sites vitrine, e-commerce, applications web avec Oxalya, votre expert en développement web.",
    url: "https://www.oxalya.info",
    siteName: "Oxalya",
    images: [
      {
        url: "https://oxalya.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxalya - Développement Web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxalya - Développement Web",
    description:
      "Solutions digitales professionnelles : sites vitrine, e-commerce, applications web. Oxalya, votre expert en développement web.",
    site: "@oxalya",
    creator: "@oxalya",
    images: ["https://oxalya.info/og-image.png"],
  },
  metadataBase: new URL("https://oxalya.info"),
  alternates: {
    canonical: "https://oxalya.info",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Oxalya",
  },
  keywords: [
    "Oxalya",
    "développement web",
    "sites vitrine",
    "e-commerce",
    "applications web",
    "landing pages",
    "développeur web",
    "création site web",
    "agence web",
    "solutions digitales",
    "Oxelya",
    "Oxalia",
    "Oxalys",
    "Xelya",
    "Xelia"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oxalya",
              url: "https://oxalya.info",
              description:
                "Oxalya est une entreprise de développement web spécialisée dans la création de sites internet modernes et performants. Nous accompagnons les entreprises dans leur transformation digitale.",
              sameAs: ["https://oxelya.com"],
              serviceType: "Développement Web",
              areaServed: "France",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de Développement Web",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sites Vitrine",
                      description: "Sites web professionnels pour présenter votre entreprise"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce",
                      description: "Boutiques en ligne performantes et sécurisées"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Applications Web",
                      description: "Solutions sur mesure pour vos besoins métier"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Pages",
                      description: "Pages optimisées pour maximiser vos conversions"
                    }
                  }
                ]
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "French"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
