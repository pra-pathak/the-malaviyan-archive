import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "The Malaviyan Archive | MMM Hall · IIT Kharagpur",
  description:
    "The official heritage and digital chronicles repository of Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur. Built under the IoE Grant for IIT Kharagpur's Platinum Jubilee 2026.",
  keywords: [
    "MMM Hall",
    "Malaviya Hall of Residence",
    "IIT Kharagpur",
    "The Malaviyan Archive",
    "Platinum Jubilee 2026",
    "Mahamana",
    "Banaras Hindu University",
    "IIT KGP Hall Archive",
  ],
  authors: [
    { name: "Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur" },
  ],
  openGraph: {
    title: "The Malaviyan Archive — Preserving Two Decades of MMM Hall",
    description:
      "A permanent digital heritage archive celebrating Pandit Madan Mohan Malaviya Hall of Residence, IIT Kharagpur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#1F2937] selection:bg-[#F59E0B] selection:text-[#0F172A] font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
