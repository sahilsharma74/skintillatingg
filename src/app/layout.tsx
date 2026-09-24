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
  metadataBase: new URL("https://www.skintillatingg.co.in"),
  title: {
    default: "Dr. Akshaya Jain - Luxury Aesthetic Clinic | Skintillatingg",
    template: "%s | Skintillatingg",
  },
  description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Pune. Specialized in HIFU, Hair GFC, Dermal Fillers, and Clinical Aesthetics.",
  keywords: [
    "Dr Akshaya Jain",
    "Skintillatingg Clinic",
    "Luxury Aesthetic Clinic Pune",
    "Pune Dermatologist",
    "Hair GFC Treatment",
    "HIFU Facial Lifting",
    "Celebrity Hair Specialist Pune",
    "Aesthetic Cosmetologist",
  ],
  authors: [{ name: "Dr. Akshaya Jain" }],
  creator: "Skintillatingg Clinic",
  publisher: "Skintillatingg",
  openGraph: {
    title: "Dr. Akshaya Jain - Luxury Aesthetic Clinic | Skintillatingg",
    description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Pune. Specialized in HIFU, Hair GFC, Dermal Fillers, and Clinical Aesthetics.",
    url: "https://www.skintillatingg.co.in",
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
    description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Pune.",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "DermatologyClinic", "MedicalClinic"],
              name: "Skintillatingg - Dr. Akshaya Jain Luxury Aesthetic Clinic",
              alternateName: "Skintillatingg Cosmo • Tricho Clinic Sanctuary",
              url: "https://www.skintillatingg.co.in",
              logo: "https://www.skintillatingg.co.in/skintillatingg-favicon.svg",
              image: "https://www.skintillatingg.co.in/skintillatingg-gold-logo.png",
              description:
                "Premier aesthetic cosmetology, trichology, and therapeutic skin rejuvenation clinic in Pune, Pune led by award-winning Dr. Akshaya Jain.",
              telephone: "+918669813636",
              email: "skintillatingg123@gmail.com",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Krishna Apartments, 10, Boat Club Rd, behind Yes Bank, Sangamvadi",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5362,
                longitude: 73.8797,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              medicalSpecialty: [
                "Dermatology",
                "Trichology",
                "CosmeticCosmetology",
                "NonSurgicalAesthetics",
              ],
              founder: {
                "@type": "Person",
                name: "Dr. Akshaya Jain",
                jobTitle: "Lead Aesthetic Cosmetologist & Trichologist",
                description:
                  "Award-winning Aesthetic Cosmetologist & Celebrity Hair Specialist with over 13 years of clinical practice.",
              },
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Laser Hair Reduction",
                  description:
                    "Triple-wavelength diode laser technology for permanent hair reduction.",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "HIFU Facial Sculpting",
                  description:
                    "High-Intensity Focused Ultrasound non-surgical skin tightening & lifting.",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Growth Factor Concentrate (GFC) Hair Therapy",
                  description:
                    "Advanced autologous growth factor treatment for hair restoration.",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Dermal Fillers & Botox",
                  description:
                    "Precision injectable facial contouring and anti-wrinkle treatments.",
                },
              ],
              sameAs: [
                "https://instagram.com/skintillatingg",
                "https://wa.me/918669813636",
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased overflow-x-hidden bg-[#1C3329] text-[#F5F5DC]`}>
        <MagazineCursor />
        {children}
      </body>
    </html>
  );
}
