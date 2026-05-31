import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: {
    default: "The Fontains | North East wedding & function band",
    template: "%s | The Fontains",
  },
  description:
    "The Fontains — North East wedding and function band: live three-piece, big sound, PAT-tested kit, full PLI, and optional professional DJ service. Bookings across Newcastle and the region.",
  keywords: [
    "wedding band",
    "North East",
    "Newcastle",
    "function band",
    "live band",
    "DJ service",
    "The Fontains",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "The Fontains",
    title: "The Fontains | North East wedding & function band",
    description:
      "Professional three-piece wedding and function band with PAT-tested kit, full PLI, and optional DJ service. Newcastle and the North East.",
    images: [
      {
        url: "/Slider-Kit.jpg",
        width: 1600,
        height: 900,
        alt: "The Fontains live on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fontains | North East wedding & function band",
    description:
      "Professional three-piece wedding and function band with optional DJ service.",
    images: ["/Slider-Kit.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
