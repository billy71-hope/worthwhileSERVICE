import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Worthwhile SERVICES - Expert Mécanique Industrielle et Poids Lourds",
    template: "%s | Worthwhile SERVICES",
  },
  description:
    "Maintenance préventive et corrective, réparation engins BTP, poids lourds, hydraulique, moteur diesel. Dépannage 24/7 sur site. Abomey-Calavi / Cotonou, Bénin.",
  keywords: [
    "réparation mécanique",
    "engins BTP",
    "poids lourds",
    "maintenance industrielle",
    "hydraulique",
    "moteur diesel",
    "Cotonou",
    "Abomey-Calavi",
    "Bénin",
  ],
  authors: [{ name: "Worthwhile SERVICES" }],
  creator: "Worthwhile SERVICES",
  publisher: "Worthwhile SERVICES",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://worthwhile-services.bj",
    siteName: "Worthwhile SERVICES",
    title: "Worthwhile SERVICES - Expert Mécanique Industrielle et Poids Lourds",
    description:
      "Maintenance préventive et corrective, réparation engins BTP, poids lourds, hydraulique, moteur diesel. Dépannage 24/7 sur site.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Worthwhile SERVICES - Expert mécanique industriel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worthwhile SERVICES - Expert Mécanique Industrielle et Poids Lourds",
    description:
      "Maintenance préventive et corrective, réparation engins BTP, poids lourds. Dépannage 24/7.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-black text-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}