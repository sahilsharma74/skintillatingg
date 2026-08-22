import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import MagazineCursor from "@/components/effects/MagazineCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skintillatingg.vercel.app"),
  title: {
    default: "Dr. Akshaya Jain - Luxury Aesthetic Clinic | Skintillatingg",
    template: "%s | Skintillatingg",
  },
  description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Koregaon Park, Pune. Specialized in HIFU, Hair GFC, Dermal Fillers, and Clinical Aesthetics.",
  keywords: [
    "Dr Akshaya Jain",
    "Skintillatingg Clinic",
    "Luxury Aesthetic Clinic Pune",
    "Koregaon Park Dermatologist",
    "Hair GFC Treatment",
    "HIFU Facial Lifting",
    "Celebrity Hair Specialist Pune",
    "Aesthetic Cosmetologist",
  ],
  authors: [{ name: "Dr. Akshaya Jain" }],
  creator: "Skintillatingg Clinic",
  publisher: "Skintillatingg",
  icons: {
    icon: [
      { url: "/skintillatingg-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/skintillatingg-favicon.svg",
    apple: "/skintillatingg-favicon.svg",
  },
  openGraph: {
    title: "Dr. Akshaya Jain - Luxury Aesthetic Clinic | Skintillatingg",
    description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Koregaon Park, Pune. Specialized in HIFU, Hair GFC, Dermal Fillers, and Clinical Aesthetics.",
    url: "https://skintillatingg.vercel.app",
    siteName: "Skintillatingg Clinic Sanctuary",
    images: [
      {
        url: "/skintillatingg-gold-logo.png",
        width: 1200,
        height: 630,
        alt: "Skintillatingg - Dr. Akshaya Jain Luxury Aesthetic Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akshaya Jain - Luxury Aesthetic Clinic | Skintillatingg",
    description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Koregaon Park, Pune.",
    images: ["/skintillatingg-gold-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/skintillatingg-favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/skintillatingg-favicon.svg" />
        <link rel="apple-touch-icon" href="/skintillatingg-favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased overflow-x-hidden bg-[#1C3329] text-[#F5F5DC]`}>
        <MagazineCursor />
        {children}
      </body>
    </html>
  );
}
