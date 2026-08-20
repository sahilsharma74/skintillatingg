import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Dr. Akshaya Jain - Luxury Aesthetic Clinic",
  description: "Award-Winning Aesthetic Cosmetologist & Celebrity Hair Specialist in Koregaon Park, Pune.",
  icons: {
    icon: [
      { url: "/skintillatingg-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/skintillatingg-favicon.svg",
    apple: "/skintillatingg-favicon.svg",
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
        {children}
      </body>
    </html>
  );
}
