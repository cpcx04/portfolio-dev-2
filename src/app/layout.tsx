import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareImageUrl = "/charla.jpg";

export const metadata: Metadata = {
  title: "Cristian Pulido Cabello - Desarrollador Full Stack en Sevilla",
  description:
    "Soy Cristian Pulido Cabello, desarrollador de software full stack en el Hospital Virgen del Rocío, Sevilla. Experto en tecnologías como React, Next.js, Java y más.",
  openGraph: {
    title: "Cristian Pulido Cabello - Desarrollador Full Stack",
    description:
      "Desarrollador en Hospital Virgen del Rocío, Sevilla. Full stack developer con experiencia en múltiples tecnologías.",
    url: "https://www.cristianpulido.es/",
    siteName: "Cristian Pulido Cabello Portfolio",
    images: [
      {
        url: shareImageUrl,
        width: 1200,
        height: 630,
        alt: "Cristian Pulido Cabello",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Pulido Cabello - Full Stack Developer",
    description:
      "Desarrollador full stack trabajando en el Hospital Virgen del Rocío, Sevilla.",
    images: [shareImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
