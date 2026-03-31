import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AANI & DANI — Restaurant & Café | Tanger",
  description:
    "Where the beauty of nature meets the flavors of AANI & DANI. Premium restaurant and café in the heart of Tangier, Morocco. Discover our menu, ambiance, and unique dining experience.",
  keywords: "AANI DANI, restaurant, café, Tanger, Tangier, Morocco, menu, food",
  openGraph: {
    title: "AANI & DANI — Restaurant & Café",
    description: "Premium restaurant and café in Tangier, Morocco",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
