import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextAura Studios — Apps, Games & Digital Experiences",
  description:
    "NextAura Studios creates mobile apps, games, digital products and interactive experiences built around creativity, technology and memorable design.",
  keywords: [
    "NextAura Studios",
    "Digital Studio",
    "Mobile Apps",
    "Game Studio",
    "Creative Technology",
    "Interactive Experiences",
    "Solar Aura",
  ],
  openGraph: {
    title: "NextAura Studios — Apps, Games & Digital Experiences",
    description:
      "NextAura Studios creates mobile apps, games, digital products and interactive experiences built around creativity, technology and memorable design.",
    url: "https://nextaurastudios.com",
    siteName: "NextAura Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextAura Studios — Apps, Games & Digital Experiences",
    description:
      "NextAura Studios creates mobile apps, games, digital products and interactive experiences built around creativity, technology and memorable design.",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
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
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#151515]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
