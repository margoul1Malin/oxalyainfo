import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confusion entre Oxalya et Oxelya ?",
  description: "Vous cherchiez notre agence web ? Vous êtes au bon endroit. Ne la confondez pas avec Oxalya ! Ou encore Oxelia et Oxalia. Avancons ensemble.",
  openGraph: {
    title: "Confusion entre Oxalya et Oxelya ?",
    description: "Vous cherchiez notre agence web ? Vous êtes au bon endroit. Ne la confondez pas avec Oxalya ! Ou encore Oxelia et Oxalia. Avancons ensemble.",
    url: "https://www.oxalya.info/informations",
    siteName: "Oxalya",
    images: [
      {
        url: "https://www.oxalya.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confusion entre Oxalya et Oxelya ?",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confusion entre Oxalya et Oxelya ?",
    description: "Vous cherchiez notre agence web ? Vous êtes au bon endroit. Ne la confondez pas avec Oxalya ! Ou encore Oxelia et Oxalia. Avancons ensemble.",
    site: "@oxelyaFr",
    creator: "@oxelyaFr",
    images: ["https://www.oxalya.info/og-image.png"],
  },
  metadataBase: new URL("https://www.oxalya.info"),
  alternates: {
    canonical: "https://www.oxalya.info/informations",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Oxalya",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}

